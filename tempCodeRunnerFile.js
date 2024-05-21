const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const { Schema } = mongoose;

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'rahasia',    
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

mongoose.connect('mongodb://localhost:27017/nama_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Koneksi ke MongoDB berhasil');
  })
  .catch((err) => {
    console.error('Koneksi ke MongoDB gagal:', err);
  });

const kendalaSchema = new Schema({
  firstname: String,
  lastname: String,
  country: String,
  subject: String,
});

const loginSchema = new Schema({
  username: String,
  email: String,
  password: String,
  confirmpass: String,
  phoneNumber: String
});

const userSchema = new Schema({
  username: String,
  password: String,
});

const Login = mongoose.model('Login', loginSchema);
const User = mongoose.model('User', userSchema);
const Kendala = mongoose.model('Kendala', kendalaSchema);

app.post("/", async (req, res) => {
  const data = new Kendala({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    country: req.body.country,
    subject: req.body.subject,
  });

  try {
    const newKendala = await data.save();
    console.log("Data terkirim:", newKendala);
  } catch (err) {
    console.error("Gagal menyimpan data:", err);
    res.status(500).send("Terjadi kesalahan saat menyimpan data");
  }
});  

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Login.findOne({ username });
    if (!user) {
      return res.status(404).send("Username tidak terdaftar. Silakan daftar terlebih dahulu.");
    }

    if (user.password !== password) {
      return res.status(401).send("Password salah");
    }

    res.redirect(`/dashboard?username=${username}`);
  } catch (error) {
    console.error("Terjadi kesalahan saat login:", error);
    res.status(500).send("Terjadi kesalahan saat login");
  }
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await Login.findOne({ username });
    if (existingUser) {
      return res.status(400).send("Username sudah terdaftar. Silakan gunakan username lain.");
    }

    const newUser = new Login({
      username,
      email: req.body.email,
      password,
      confirmpass: req.body.confirmpass,
      phoneNumber: req.body.phoneNumber
    });

    const savedUser = await newUser.save();
    console.log("User baru terdaftar:", savedUser);
    res.redirect("/dashboard");
  } catch (err) {
    console.error("Gagal melakukan registrasi:", err);
    res.status(500).send("Terjadi kesalahan saat melakukan registrasi");
  }
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.get('/ruteB', (req, res) => {
  res.render('ruteB', { title: 'ruteBusway' });
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'profile' });
});

app.get('/berita', (req, res) => {
  res.render('berita', { title: 'berita' });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

module.exports = app;
