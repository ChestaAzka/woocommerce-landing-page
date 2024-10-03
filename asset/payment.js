// Ambil data keranjang dari localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Mengambil elemen DOM
const orderSummaryContainer = document.getElementById('order-summary');
const totalPriceElement = document.getElementById('total-price');

// Fungsi untuk menampilkan rincian pesanan
function displayOrderSummary() {
    orderSummaryContainer.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach(item => {
        const totalItemPrice = item.price * item.quantity;
        totalPrice += totalItemPrice;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>Rp ${item.price.toLocaleString()}</td>
            <td>${item.quantity}</td>
            <td>Rp ${totalItemPrice.toLocaleString()}</td>
        `;
        orderSummaryContainer.appendChild(row);
    });

    totalPriceElement.textContent = `Rp ${totalPrice.toLocaleString()}`;
}

// Event listener untuk tombol bayar
document.getElementById('pay-button').addEventListener('click', () => {
    alert('Pembayaran berhasil! Terima kasih atas pembelian Anda.');
    // Kosongkan keranjang setelah pembayaran
    localStorage.removeItem('cartItems');
});

// Tampilkan rincian pesanan saat halaman dimuat
displayOrderSummary();
