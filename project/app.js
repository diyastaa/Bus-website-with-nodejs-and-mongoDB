
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const { Schema } = mongoose;

const app = express();
const port = 3002;

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

mongoose.connect('mongodb://localhost:27017/transj', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Koneksi ke MongoDB berhasil');
  })
  .catch((err) => {
    console.error('Koneksi ke MongoDB gagal:', err);
  });

const loginSchema = new Schema({
  username: String,
  email: String,
  password: String,
  confirmpass: String,
  phoneNumber: String
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  phoneNumber: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' } 
});

const tjSchema = new mongoose.Schema({
  route_id: String,
  agency_id: String, 
  route_short_name: String, 
  route_long_name: String,
  route_desc: String,
  route_type: Number, 
  route_color: String,
  route_text_color: String 
});

const kendalaSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  daerah: String,
  kendala: String
});

const Kendala = mongoose.model('Kendala', kendalaSchema);
const Login = mongoose.model('Login', loginSchema);
const User = mongoose.model('User', userSchema);
const Tj = mongoose.model('Tj', tjSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', async (req, res) => {
  try {
      const { username, email, password, phoneNumber } = req.body;
      const user = new User({ username, email, password, phoneNumber });
      await user.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error registering user');
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
      const user = await User.findOne({ username, password });
      if (user) {
          req.session.isLoggedIn = true;
          req.session.username = user.username;
          if (user.role === 'admin') {
              req.session.role = 'admin'; 
              res.redirect('/admindash');
          } else {
            req.session.role = 'user'; 
              res.redirect('/userhome');
          }
      } else {
          res.status(401).send('Invalid username or password');
      }
  } catch (err) {
      console.error(err);
      res.status(500).send('Error logging in');
  }
});


app.get('/', async (req, res) => {
  try {
      const tjData = await Tj.find();
      res.render('index', { title: 'User Dashboard', tjData }); 
  } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Error fetching data");
  }
});



app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.get('/signup', (req, res) => {
  res.render('signup', { title: 'signup' });
});


app.get('/admindash', isAdmin, async (req, res) => {
  try {
    const tjData = await Tj.find();
    res.render('admindash', { title: 'Admin Menu', tjData, isLoggedIn: req.session.isLoggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


function isAdmin(req, res, next) {
  if (req.session && req.session.isLoggedIn && req.session.role === 'admin') {
    return next();
  } else {
    console.log("Unauthorized access attempt detected!"); 
    res.redirect('/login');
  }
}

app.get('/rute', isAdmin, async (req, res) => {
  try {
    const tjData = await Tj.find();
    res.render('rute', { title: 'Admin Menu', tjData, isLoggedIn: req.session.isLoggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/userview', isAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.render('userview', { title: 'Admin Menu', users, isLoggedIn: req.session.isLoggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


function isUser(req, res, next) {
  if (req.session && req.session.isLoggedIn && req.session.role === 'user') {
    return next();
  } else {
    console.log("Unauthorized access attempt detected!"); 
    res.redirect('/login');
  }
}

app.get('/userhome', isUser, async (req, res) => {
  try {
    const tjData = await Tj.find();
    res.render('userhome', { title: 'Admin Menu', tjData, isLoggedIn: req.session.isLoggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/ruteB', async (req, res) => {
  try {
      const tjData = await Tj.find();
      res.render('RuteB', { title: 'User Dashboard', tjData }); 
  } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Error fetching data");
  }
});
app.get('/tj/add', (req, res) => {
  res.render('tj_add', { title: 'Tambah Data TJ', isLoggedIn: req.session.isLoggedIn });
});
app.post('/tj/add', async (req, res) => {
  try {
    const { route_id, agency_id, route_short_name, route_long_name, route_desc, route_type, route_color, route_text_color } = req.body;
    const tj = new Tj({ route_id, agency_id, route_short_name, route_long_name, route_desc, route_type, route_color, route_text_color });
    await tj.save();
    res.redirect('/rute');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating TJ data');
  }
});
app.get('/tj/edit/:id', async (req, res) => {
  try {
    const tj = await Tj.findById(req.params.id);
    res.render('tj_edit', { title: 'Edit Data TJ', tj });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.post('/tj/edit/:id', async (req, res) => {
  try {
    const { route_id, agency_id, route_short_name, route_long_name, route_desc, route_type, route_color, route_text_color } = req.body;
    await Tj.findByIdAndUpdate(req.params.id, { route_id, agency_id, route_short_name, route_long_name, route_desc, route_type, route_color, route_text_color });
    res.redirect('/rute');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating TJ data');
  }
});


app.post('/tj/delete/:id', async (req, res) => {
  try {
    await Tj.findByIdAndDelete(req.params.id);
    res.redirect('/rute');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting TJ data');
  }
});


app.get('/user', async (req, res) => {
  try {
    const users = await User.find();
    res.render('userDashboard', { users });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.redirect('/index');
    }
  });
});

app.get('/index', async (req, res) => {
    try {
        const tjData = await Tj.find();
        res.render('index', { title: 'User Dashboard', tjData }); 
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
});

app.get('/send-kendala', isUser, (req, res) => {  
  res.render('send-kendala-form'); 
});


app.post('/send-kendala', isUser, async (req, res) => {
  try {

    const { firstName, lastName, daerah, kendala } = req.body;
   
    const newKendala = new Kendala({ firstName, lastName, daerah, kendala });

    await newKendala.save();
  
    res.redirect('/userhome');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/lihatkendala', isAdmin, async (req, res) => {
  try {
    const kendalas = await Kendala.find(); 
    res.render('lihatkendala', { kendalas });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/berita', (req, res) => {
  res.render('berita', { title: 'berita' });
});

app.get('/tj', async (req, res) => {
  try {
    const tjData = await Tj.find();
    res.render('tj', { title: 'Data TJ', tjData });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
app.post('/user/delete/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/userview');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}/index`);
});

