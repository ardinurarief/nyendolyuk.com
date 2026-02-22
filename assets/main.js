function kirimPesanWA(element) {
  // 1. Ambil parent card dari tombol yang diklik
  const card = element.closest('.menu-card');

  // 2. Ambil data spesifik dari kartu tersebut
  const menuName = card.getAttribute('data-menu-name');
  const price = card.getAttribute('data-menu-price');

  // 3. Nomor WhatsApp Tujuan
  const phoneNumber = '6281366616094';

  // 4. Format Pesan
  const message = `Hallo, Saya Ingin Pesan ${menuName}!
Nama:
No-Telepon:
Metode Pengiriman: Ambil di Toko/ Diantar 
Metode Pembayaran: Cash/ Transfer Via Dana(081366616094)

Harga: Rp ${price}`;

  // 5. Buka WhatsApp
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}