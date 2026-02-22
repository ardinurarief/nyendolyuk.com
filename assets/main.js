function openWhatsApp(btnElement) {
  const card = btnElement.closest(".menu-card");
  const menuName = card.getAttribute("data-menu-name");
  const price = card.getAttribute("data-menu-price");

  const phoneNumber = "6281366616094";

  const message = `Hallo, Saya Ingin Pesan ${menuName}!
Nama:
No-Telepon:
Metode Pengiriman: Ambil di Toko/ Diantar 
Metode Pembayaran: Cash/ Transfer Via Dana(081366616094)

Harga: Rp ${price}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
}
