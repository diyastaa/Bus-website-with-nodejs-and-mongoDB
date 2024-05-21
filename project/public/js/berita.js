// Data berita TransJakarta dalam bentuk array objek
const newsData = [
    { 
      title: "Jam Operasional TransJakarta saat Mudik Lebaran 2024, Cek di Sini! ", 
      date: "2024-04-03", 
      trending: true, 
      image: "https://akcdn.detik.net.id/community/media/visual/2023/02/22/pelecehan-di-bus-transjakarta-kronologi-hingga-pelaku-ditangkap-1_169.jpeg?w=700&q=90", 
      link: "https://news.detik.com/berita/d-7275741/jam-operasional-transjakarta-saat-mudik-lebaran-2024-cek-di-sini",
      description: "Selama arus mudik dan arus balik lebaran 2024, ada penyesuaian layanan TransJakarta. Simak informasi jam operasional TransJakarta saat mudik lebaran 2024",
      author: "detikNews",
      views: 1000 
    },
    { 
      title: "Sejumlah Rute TransJ ke Monas Dialihkan karena Ada Demo di Patung Kuda ", 
      date: "2020-04-28", 
      trending: false, 
      image: "https://akcdn.detik.net.id/community/media/visual/2023/05/16/catat-transj-targetkan-sejumlah-rute-ditempuh-maksimal-35-menit-1.jpeg?w=700&q=90", 
      link: "https://news.detik.com/berita/d-7265596/sejumlah-rute-transj-ke-monas-dialihkan-karena-ada-demo-di-patung-kuda",
      description: "Ada rencana demonstrasi di kawasan Patung Kuda disebelah barat Monas, Jakarta Pusat. Sejumlah rute bus TransJakarta harus minggir dulu pagi ini",
      author: "detikNews",
      views: 500 
    },
    { 
      title: "60 Halte TransJakarta yang ada Musholanya, Cek Daftarnya! ", 
      date: "2024-04-27", 
      trending: true, 
      image: "https://akcdn.detik.net.id/community/media/visual/2017/12/06/c4a3c12d-2e31-4b33-b018-982c89ac750c_169.jpg?w=700&q=90", 
      link: "https://news.detik.com/berita/d-7264887/60-halte-transjakarta-yang-ada-musholanya-cek-daftarnya",
      description: "Sebanyak 60 halte TransJakarta sudah dilengkapi fasilitas mushola dan menyediakan alat shalat. Berikut daftar halte TransJakarta yang ada musholanya!",
      author: "detikNews",
      views: 1200 
    },
    { 
      title: "Potret 3 Halte TransJakarta yang Disulap Bak Galeri Seni ", 
      date: "2024-04-27", 
      trending: false, 
      image: "https://akcdn.detik.net.id/community/media/visual/2024/03/26/potret-3-halte-transjakarta-yang-disulap-bak-galeri-seni_169.jpeg?w=700&q=90", 
      link: "https://example.com/berita-terbaru-4",
      description: "PT TransJakarta berkolaborasi dengan City Vision menyulap sejumlah halte TransJakarta mirip galeri seni",
      author: "detikNews",
      views: 800 
    },
    { 
      title: "Daftar Rute Bus TransJ hingga Mikrotrans Terganggu Banjir Jakarta Pagi Ini ", 
      date: "2024-03-22", 
      trending: true, 
      image: "https://akcdn.detik.net.id/community/media/visual/2022/02/02/yuk-intip-fasilitas-modern-mikrotrans-yang-baru-1.jpeg?w=700&q=90", 
      link: "https://news.detik.com/berita/d-7255148/daftar-rute-bus-transj-hingga-mikrotrans-terganggu-banjir-jakarta-pagi-ini",
      description: "Sebagian wilayah Jakarta kebanjiran pada pagi hari. Pengguna bus dan mikrotans TransJakarta terkena dampak karena sebagian layanan bus ini terganggu karena adanya banjir",
      author: "detikNews",
      views: 1500 
    },
    { 
      title: "Buka Puasa saat di KRL-Transjakarta? Simak Aturannya! ", 
      date: "2024-03-13", 
      trending: true, 
      image: "https://akcdn.detik.net.id/community/media/visual/2024/03/08/kondisi-penumpang-krl-dari-stasiun-ancol-ke-stasiun-tanjung-priok-dan-balik-lagi-ke-stasiun-ancol-8-maret-2024-malam-dyah-alam-1_43.jpeg?w=300&q=80", 
      link: "https://20.detik.com/detikupdate/20240313-240313066/buka-puasa-saat-di-krl-transjakarta-simak-aturannya",
      description: "Jika waktu berbuka puasa telah tiba tapi masih berada di dalam transportasi umum, ada sejumlah aturan yang perlu diperhatikan selama Ramadhan. Simak berikut ini",
      author: "detikNews",
      views: 2000 
    },
    { 
      title: "Potret Layanan TransJakarta Cares, Transportasi Gratis untuk Disabilitas", 
      date: "2024-03-04", 
      trending: true, 
      image: "https://akcdn.detik.net.id/community/media/visual/2024/03/04/potret-layanan-transjakarta-cares-transportasi-gratis-untuk-disabilitas_169.jpeg?w=700&q=90",
      link: "https://finance.detik.com/foto-bisnis/d-7224314/potret-layanan-transjakarta-cares-transportasi-gratis-untuk-disabilitas",
      description: "PT TransJakarta memiliki 20 unit mobil TransJakarta Cares. Layanan gratis ini diperuntukkan penyandang disabilitas dan lansia yang membutuhkan transportasi",
      author: "detikFinance",
      views: 1800 
    },
    { 
      title: "Rute Baru TransJ Pulogadung-Wali Kota Jakut Bikin Sopir Angkot Ribut ", 
      date: "2024-02-24", 
      trending: false, 
      image: "https://akcdn.detik.net.id/community/media/visual/2021/12/03/jakarta-pkkm-level-2-ini-aturan-naik-transportasi-umum-6_169.jpeg?w=700&q=90", 
      link: "https://news.detik.com/berita/d-7209441/rute-baru-transj-pulogadung-wali-kota-jakut-bikin-sopir-angkot-ribut",
      description: "Penerapan rute baru TransJakarta Pulogadung-Wali Kota Jakarta Utara menimbulkan protes dari sopir angkutan perkotaan (angkot)",
      author: "detikNews",
      views: 900 
    },
    { 
      title: "Libur Nasional Pemilu 2024, Bus TransJakarta Tetap Beroperasi Normal Besok ", 
      date: "2024-02-13", 
      trending: true, 
      image: "https://akcdn.detik.net.id/community/media/visual/2023/02/22/pelecehan-di-bus-transjakarta-kronologi-hingga-pelaku-ditangkap-1_169.jpeg?w=700&q=90", 
      link: "https://news.detik.com/berita/d-7190582/libur-nasional-pemilu-2024-bus-transjakarta-tetap-beroperasi-normal-besok",
      description: "Libur Nasional Pemilu 2024 jatuh esok hari. PT TransJakarta memastikan tetap beroperasi normal saat libur nasional 14 Februari besok",
      author: "detikNews",
      views: 2200 
    },
    { 
      title: "DPRD DKI Bakal Panggil Direksi TransJakarta soal Pengubahan Nama-nama Halte ", 
      date: "2024-01-17", 
      trending: true, 
      image: "https://akcdn.detik.net.id/community/media/visual/2022/08/22/ketua-dprd-dki-prasetyo-edi-marsudi_169.jpeg?w=700&q=90", 
      link: "https://news.detik.com/berita/d-7145868/dprd-dki-bakal-panggil-direksi-transjakarta-soal-pengubahan-nama-nama-halte",
      description: "Ketua DPRD DKI Jakarta Prasetyo Edi Marsudi berencana memanggil jajaran direksi PT TransJakarta dalam waktu dekat buntut penggantian beberapa nama halte",
      author: "detikNews",
      views: 1700 
    },
  ];
  
  // Fungsi untuk menampilkan berita ke dalam elemen HTML
  function displayNews(newsArray) {
    // Mengambil elemen dengan id "news-list"
    const newsList = document.getElementById("news-list");
    newsList.innerHTML = "";
  
    // Loop melalui setiap berita dalam array dan menambahkannya ke dalam elemen "news-list"
    newsArray.forEach(news => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item"); // Menambahkan kelas "news-item" ke elemen div
  
      // Mengisi konten berita ke dalam elemen div yang mengarah ke html
      newsItem.innerHTML = `
        <h3>${news.title}${news.trending ? ' <i class="fas fa-fire text-danger"></i>' : ''}</h3>
        <img src="${news.image}" alt="${news.title}" style="width: 270px; height: auto;">
        <p><i class="far fa-calendar-alt"></i> ${news.date}</p>
        <p><i class="fas fa-align-left"></i> ${news.description}</p>
        <p><i class="fas fa-user"></i> ${news.author}</p>
        <p><i class="fas fa-eye"></i> Views: ${news.views}</p>
        <a href="${news.link}" target="_blank">Baca Selengkapnya</a>
      `;
      newsList.appendChild(newsItem);
    });
  }
    
    // Fungsi untuk mengurutkan berita berdasarkan kriteria tertentu
    function sortNews(sortBy) {
      let sortedNews = [];
  
      // Melakukan pengurutan berita sesuai dengan kriteria yang dipilih
      switch(sortBy) {
        case 'newest':
          sortedNews = newsData.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case 'oldest':
          sortedNews = newsData.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
          break;
        case 'trending':
          sortedNews = newsData.filter(news => news.trending).sort((a, b) => b.views - a.views);
          break;
        default:
          sortedNews = newsData;
      }
      // Menampilkan berita yang telah diurutkan
      displayNews(sortedNews);
    }
    
    
    // Menampilkan berita terbaru sebagai default
    sortNews('newest');
      
    // Fungsi untuk menyaring berita berdasarkan kata kunci
        function filterNews() {
          // Mendapatkan kata kunci pencarian dari input filter
          const filterInput = document.getElementById('filter-input').value.toLowerCase();
  
          // Menyaring berita berdasarkan kata kunci
          const filteredNews = newsData.filter(news => {
              return news.title.toLowerCase().includes(filterInput) ||
                     news.description.toLowerCase().includes(filterInput) ||
                     news.author.toLowerCase().includes(filterInput);
          });
  
          // Menampilkan berita yang telah disaring atau pesan "Berita tidak ditemukan"
          if (filteredNews.length === 0) {
              const newsList = document.getElementById('news-list');
              newsList.innerHTML = '<div class="not-found">Berita tidak ditemukan</div>';
          } else {
              displayNews(filteredNews);
          }
      }
  
      // Menampilkan berita yang telah disaring saat halaman dimuat
      filterNews();
  
  
      // Fungsi untuk menerapkan filter berdasarkan pilihan checkbox
      function applyFilters() {
        // Mendapatkan status checkbox untuk setiap filter
        const newestFilter = document.getElementById('newest-filter').checked;
        const oldestFilter = document.getElementById('oldest-filter').checked;
        const trendingFilter = document.getElementById('trending-filter').checked;
  
        // Melakukan filter berdasarkan pilihan checkbox yang dipilih
        if (newestFilter && oldestFilter) {
          alert('Anda hanya dapat memilih satu opsi penyortiran pada satu waktu.');
          document.getElementById('newest-filter').checked = false;
          document.getElementById('oldest-filter').checked = false;
          document.getElementById('trending-filter').checked = false;
        } else {
          let filteredNews = [];
  
          if (newestFilter && trendingFilter) {
            filteredNews = newsData.slice().filter(news => news.trending && new Date(news.date) >= new Date('2024-03-01')).sort((a, b) => new Date(b.date) - new Date(a.date));
          } else if (newestFilter) {
            filteredNews = newsData.slice().filter(news => new Date(news.date) >= new Date('2024-03-01')).sort((a, b) => new Date(b.date) - new Date(a.date));
          } else if (trendingFilter) {
            filteredNews = newsData.filter(news => news.trending && (new Date(news.date) >= new Date('2024-01-01') && new Date(news.date) <= new Date('2024-02-29'))).sort((a, b) => b.views - a.views);
          }
  
          // Menampilkan jika tidak pilih checkbox
          if (filteredNews.length === 0) {
            const newsList = document.getElementById('news-list');
            newsList.innerHTML = '<div class="not-found">Berita tidak ditemukan</div>';
          } else {
            displayNews(filteredNews);
          }
        }
      }
  
      function toggleFilterOptions() {
        var filterOptions = document.getElementById("filter-options");
        if (filterOptions.style.display === "none" || filterOptions.style.display === "") {
            filterOptions.style.display = "block";
        } else {
            filterOptions.style.display = "none";
        }
    }
  
    // mencari search di dalam kotak input
    function searchNews() {
      var input, filter, filteredNews;
      input = document.getElementById("filter-input");
      filter = input.value.toUpperCase();
  
      // Filter berita sesuai dengan kueri pencarian
      filteredNews = newsData.filter(item => item.title.toUpperCase().includes(filter));
  
      // Tampilkan hasil pencarian
      displayNews(filteredNews);
  }
  
      // Menambahkan event listener untuk memanggil fungsi pencarian saat tombol "Search" diklik
      document.getElementById("search-button").addEventListener("click", searchNews);
  
      // Menampilkan semua berita saat halaman pertama dimuat
      displayNews(newsData);
    
  
  