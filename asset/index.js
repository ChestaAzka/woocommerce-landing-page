// Data keranjang dari localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Fungsi untuk menampilkan notifikasi
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Menambahkan event listener pada tombol
document.querySelectorAll('.btn[data-name]').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const productName = button.getAttribute('data-name');
        const productPrice = parseInt(button.getAttribute('data-price'));

        // Tambahkan produk ke keranjang
        const existingItem = cartItems.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ name: productName, price: productPrice, quantity: 1 });
        }

        // Simpan ke localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Tampilkan notifikasi
        showNotification(`${productName} ditambahkan ke keranjang!`);
    });
});
