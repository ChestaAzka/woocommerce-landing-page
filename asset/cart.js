// Ambil data keranjang dari localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Mengambil elemen DOM
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Fungsi untuk menampilkan item di keranjang
function displayCartItems() {
    cartItemsContainer.innerHTML = '';
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
            <td><button class="btn remove-btn" data-name="${item.name}">Hapus</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });

    totalPriceElement.textContent = `Rp ${totalPrice.toLocaleString()}`;
}

// Fungsi untuk menghapus item dari keranjang
function removeItem(name) {
    cartItems = cartItems.filter(item => item.name !== name);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
}

// Event listener untuk menghapus item
cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const productName = e.target.getAttribute('data-name');
        removeItem(productName);
    }
});

// Tampilkan item saat halaman dimuat
displayCartItems();
