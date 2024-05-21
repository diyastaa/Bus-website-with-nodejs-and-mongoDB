// JavaScript code
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const profileName = document.getElementById('profileName');
    profileName.textContent = username; // Menampilkan nama pengguna di halaman dashboard
};

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    
    if (date && amount) {
        const entry = document.createElement('tr');
        entry.innerHTML = `<td>${date}</td><td>Rp ${amount}</td><td>${description || '-'}</td><td><button class="btn-delete" onclick="deleteEntry(this)"><i class="fas fa-trash-alt"></i>Delete</button> <button class="btn-edit" onclick="editEntry(this)"><i class="fas fa-edit"></i>Edit</button></td>`;
        document.getElementById('entries').appendChild(entry);
        
        // Clear form fields
        document.getElementById('date').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('Mohon isi semua bidang.');
    }
});


function deleteEntry(entry) {
    entry.parentNode.parentNode.remove();
}

function editEntry(entry) {
    const parent = entry.parentNode.parentNode;
    const cells = parent.getElementsByTagName('td');
    const date = cells[0].innerText;
    const amount = cells[1].innerText.replace(' Rp', '');
    const description = cells[2].innerText;

    document.getElementById('date').value = date;
    document.getElementById('amount').value = parseInt(amount);
    document.getElementById('description').value = description;

    parent.remove();
}

function saveEntry() {
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    
    if (date && amount && description) {
        alert('Entri berhasil disimpan!');
    } else {
        alert('Mohon lengkapi semua bidang sebelum menyimpan.');
    }
}

function logout() {
    // Mengarahkan pengguna ke halaman login
    window.location.href = "/";
}
