document.getElementById('routeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var origin = document.getElementById('origin').value;
    var destination = document.getElementById('destination').value;

    // Placeholder for actual route finding logic
    var result = findFastestRoute(origin, destination);

    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h2>Alternatif Rute Tercepat:</h2>' +
                           '<p>Asal: ' + origin + '</p>' +
                           '<p>Tujuan: ' + destination + '</p>' +
                           '<p>Rute: ' + result.route + '</p>' +
                           '<p>Jenis Layanan: ' + result.serviceType + '</p>' +
                           '<p>Bus: ' + result.bus + '</p>';
});

function findFastestRoute(origin, destination) {
// Definisikan waktu tempuh antarhalte beserta jenis layanan dan bus
var travelTimes = {
"blok m": {
    "kota": { serviceType: "Layanan BRT", bus: "1 & M1" },
    "pasar minggu": { serviceType: "Layanan BST", bus: "6U" },
    "pgc": { serviceType: "Layanan BST", bus: "7Q" }
},
"cibubur": {
    "pluit": { serviceType: "Layanan BRT", bus: "7R" },
    "tanjung priok": { serviceType: "Layanan BST", bus: "7T" },
    "ancol": { serviceType: "Layanan BST", bus: "7U" },
    "kampung rambutan": { serviceType: "Layanan BST", bus: "7V" }
},
"duren tiga": {
    "blok m via bangka raya": { serviceType: "Layanan BST", bus: "6W" },
},
"kota": {
    "kaliadem": { serviceType: "Layanan BST", bus: "12A" },
},
"cawang": {
    "stasiun kereta cepat halim": { serviceType: "Layanan BST", bus: "7W"}, 
},
"kebayoran lama": {
    "tanah abang": { serviceType: "Layanan BST", bus: "8C" }, 
    "jelambar": { serviceType: "Layanan BST", bus: "9E" }, 
},
"joglo": {
    "blok m": { serviceType: "Layanan BST", bus: "8D" }, 
},
"bintaro": {
    "blok m": { serviceType: "Layanan BST", bus: "8E" }, 
},
"batusari": {
    "jelambar": { serviceType: "Layanan BST", bus: "8K" }, 
},
"pantai maju": {
    "balaikota via tol ir sedyatmo": { serviceType: "Layanan BST", bus: "1A" },
},
"stasiun pal merah": {
    "tosari": { serviceType: "Layanan BST", bus: "1B" },
    "bundaran senayan": { serviceType: "Layanan BST", bus: "1F" },
    "statiun gondangdia": { serviceType: "Layanan BST", bus: "1H" },
},
"stasiun manggarai": {
    "blok m": { serviceType: "Layanan BST", bus: "6M" },
},
"meruya": {
    "blok m": { serviceType: "Layanan BST", bus: "1M" }
},
"pesanggrahan": {
    "blok m": { serviceType: "Layanan BST", bus: "1C" },
},
"pondok labu": {
    "blok m": { serviceType: "Layanan BST", bus: "1E" },
},
"tanah abang": {
    "blok m": { serviceType: "Layanan BST", bus: "1N" },
    "tanjung duren": { serviceType: "Layanan BST", bus: "8M" },
},
"senen": {
    "blok m": { serviceType: "Layanan BST", bus: "1P" },
    "tanah abang": { serviceType: "Layanan BST", bus: "1R" },
    "lebak bulus": { serviceType: "Layanan BST", bus: "6H" },
},
"patra kuningan": {
    "karet": { serviceType: "Layanan BST", bus: "6K" },
},
"harapan indah": {
    "pulo gadung": { serviceType: "Layanan BST", bus: "2B" },
},
"rempoa": {
    "blok m": { serviceType: "Layanan BST", bus: "1Q" },
},
"gondangdia": {
    "senen": { serviceType: "Layanan BST", bus: "2P" },
    "balaikota": { serviceType: "Layanan BST", bus: "2Q" },
},
"taman kota": {
    "penjaringan via tubagus angke": { serviceType: "Layanan BST", bus: "3D" },
},
"sentraland cengkareng": {
    "puri kembangan": { serviceType: "Layanan BST", bus: "3E" },
},
"pemuda merdeka": {
    "bundaran senayan": { serviceType: "Layanan BST", bus: "4C" },
},
"pinang ranti": {
    "pulo gadung": { serviceType: "Layanan BST", bus: "4F" },
},
"dukuh atas": {
    "casablanca via epicentrum": { serviceType: "Layanan BST", bus: "6Q" },
},
"pulo gebang": {
    "pulo gadung via pik": { serviceType: "Layanan BST", bus: "11D" },
},
"pasar minggu": {
    "velbak via kebon jeruk": { serviceType: "Layanan BST", bus: "6T" },
    "tanah abang": { serviceType: "Layanan BST", bus: "9D" },
    "cipedak": { serviceType: "Layanan BST", bus: "9H" },
},
"stasiun tebet": {
    "bidaran cina": { serviceType: "Layanan BST", bus: "5B" },
    "kuningan": { serviceType: "Layanan BST", bus: "6C" },
    "bundaran senayan": { serviceType: "Layanan BST", bus: "6D" },
},
"pulo gadung": {
    "monumen nasional": { serviceType: "Layanan BRT", bus: "2 & M2" },
    "rawa buaya": { serviceType: "Layanan BRT", bus: "2A" },
    "galunggung": { serviceType: "Layanan BRT", bus: "4 & M4" },
    "kuningan": { serviceType: "Layanan BRT", bus: "4D" },
    "ragunan": { serviceType: "Layanan BRT", bus: "4H" },
},
"kalideres": {
    "monumen nasional via veteran": { serviceType: "Layanan BRT", bus: "3 & M3" },
    "gelora bung karno": { serviceType: "Layanan BRT", bus: "3F" }
},
"statiun pesing": {
    "kota": { serviceType: "Layanan BRT", bus: "3F" }
},
"pondok kelapa": {
    "cawang sentral": { serviceType: "Layanan BST", bus: "7P" }
},
"kampung melayu": {
    "ancol": { serviceType: "Layanan BRT", bus: "5 & M5" },
    "kampung rambutan": { serviceType: "Layanan BRT", bus: "7" },
    "tanah abang": { serviceType: "Layanan BRT", bus: "5F" },
    "tanah abang via cikini": { serviceType: "Layanan BST", bus: "5M" },
    "pulo gebang via bkt": { serviceType: "Layanan BST", bus: "11Q" },
},
"cililitan": {
    "juanda": { serviceType: "Layanan BRT", bus: "5C" },
    "ancol": { serviceType: "Layanan BRT", bus: "5D" },
    "kali grogol": { serviceType: "Layanan BRT", bus: "9A" },
},
"juanda": { 
    "ancol": { serviceType: "Layanan BRT", bus: "5D" },
    "jakarta international stadium": { serviceType: "Layanan BST", bus: "14A" },
},
"ragunan": {
    "galunggung": { serviceType: "Layanan BRT", bus: "6 & M6" },
    "balai kota via kuningan": { serviceType: "Layanan BRT", bus: "6A" },
    "balai kota via semanggi": { serviceType: "Layanan BRT", bus: "6B" },
    "gelora bung karno": { serviceType: "Layanan BRT", bus: "6V" },
    "kampung melayu": { serviceType: "Layanan BST", bus: "5N" },
    "blok m via kemang": { serviceType: "Layanan BST", bus: "6N" },
},
"kampung rambutan": {
    "juanda via cempaka putih": { serviceType: "Layanan BRT", bus: "7F" },
    "kampung melayu": { serviceType: "Layanan BRT", bus: "M7" },
    "lebak bulus": { serviceType: "Layanan BST", bus: "7A" },
    "blok m": { serviceType: "Layanan BST", bus: "7B" },
    "ragunan": { serviceType: "Layanan BST", bus: "7E" },
},
"lebak bulus": {
    "pasar baru": { serviceType: "Layanan BRT", bus: "8 & M8" },
},
"tmii": {
    "tegal parang": { serviceType: "Layanan BST", bus: "7D" },
},
"pinang ranti": {
    "pluit": { serviceType: "Layanan BRT", bus: "9 & M9" },
    "bundaran senayan": { serviceType: "Layanan BRT", bus: "9C" },
    "simpang cawang": { serviceType: "Layanan BRT", bus: "9N" },
},
"tanjung priok": {
    "pgc": { serviceType: "Layanan BRT", bus: "10 & M10" },
    "bundaran senayan": { serviceType: "Layanan BRT", bus: "10H" },
    "kampung rambutan": { serviceType: "Layanan BRT", bus: "10D" },
    "senen via taman bmw": { serviceType: "Layanan BRT", bus: "14B" },
},
"pulogebang": {
    "kampung melayu": { serviceType: "Layanan BRT", bus: "11 & M11" },
},
"pluit": {
    "tanjung priok": { serviceType: "Layanan BRT", bus: "12" },
    "senen": { serviceType: "Layanan BST", bus: "12B" },
},
"stasiun lrt pegangsaan": {
    "jis": { serviceType: "Layanan BST", bus: "12P" },
},
"ciledug": {
    "tegal mampang": { serviceType: "Layanan BRT", bus: "13" },
},
"puri beta": {
    "dukuh atas": { serviceType: "Layanan BRT", bus: "13C" },
    "flyover kuningan": { serviceType: "Layanan BRT", bus: "L13E" },
},
"puri beta 2": {
    "ragunan": { serviceType: "Layanan BRT", bus: "13D" },
    "tegal mampang": { serviceType: "Layanan BRT", bus: "M13" },
},
"jakarta international stadium": {
    "senen": { serviceType: "Layanan BRT", bus: "14 & M14" },
},
"sunter boulevar barat": {
    "penjaringan": { serviceType: "Layanan BRT", bus: "M12" },
},
};

// Ubah masukan pengguna menjadi huruf kecil untuk konsistensi
origin = origin.toLowerCase();
destination = destination.toLowerCase();

// Temukan waktu tempuh dari origin ke destination
if (travelTimes[origin] && travelTimes[origin][destination]) {
return {
    serviceType: travelTimes[origin][destination].serviceType,
    bus: travelTimes[origin][destination].bus,
    route: origin + " - " + destination
};
} else {
return {
    time: "Tidak ditemukan rute atau waktu tempuh",
    serviceType: "",
    bus: "",
    route: ""
};
}
}