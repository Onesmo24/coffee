 // Cart functionality
        let cart = [];
        let total = 0;

        // Show specific page and hide others
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.style.display = 'none';
            });
            document.getElementById(pageId).style.display = 'block';
        }

        // Show modal
        function showModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
        }

        // Close modal
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        // Add item to cart
        function addToCart(name, price) {
            cart.push({ name, price });
            total += price;
            updateCart();
        }

        // Update cart display
        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');

            if (cart.length === 0) {
                cartItems.innerHTML = '<p>Your cart is empty</p>';
            } else {
                cartItems.innerHTML = '';
                cart.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'cart-item';
                    itemElement.innerHTML = `
                        <span>${item.name}</span>
                        <span>$${item.price.toFixed(2)}</span>
                    `;
                    cartItems.appendChild(itemElement);
                });
            }

            cartTotal.textContent = `Total: $${total.toFixed(2)}`;
        }

        // Checkout function
        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }

            alert(`Order placed! Total: $${total.toFixed(2)}\nThank you for your order!`);
            cart = [];
            total = 0;
            updateCart();
        }

        // Login form submission
        document.getElementById('loginForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Hardcoded credentials for demo
            if (username === 'admin' && password === 'password') {
                alert('Login successful!');
                closeModal('loginModal');
                showPage('dashboard');
            } else {
                alert('Invalid username or password');
            }
        });

        // Initialize the page
        showPage('home');