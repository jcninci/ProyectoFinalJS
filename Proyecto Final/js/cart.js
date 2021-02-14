function ShoppingCart() {
    this.cart = [];

    this.init = function() {
        this.cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    }

    this.add = function (product) {
        this.cart.push(product);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.buildCart('#cart');
        this.cartLength('#cart-length');
    }

    this.buildCartList = function() {
        let html = '';
        this.cart.forEach(function(product) {
            html += `<li>
                        <div>${product.models} <span>$${product.price}</span></div>
                        <div class="img-trash">
                            <img class="img-cart" src="${product.img}">
                            <a class="trash-btn" onclick='deleteItem("${product.id}")'><i class="fas fa-trash"></i></a>
                        </div>
                    </li>`;
        });
        return html
    }
  

    this.buildCart = function (containerID) {
        let container = document.querySelector(containerID);
        container.innerHTML = '';
        let html = `
        <h2>Carrito de compras (${this.cart.length})</h2>
        <ul class="ul-cart">
            ${ this.buildCartList() }
        </ul>
        <div class="total-price">
        <p>Total price: <span>$${this.totalPrice()}</span></p>
    </div>
        `
        container.innerHTML = html;
    }

    this.cartLength = (containerID) => {
        let span = document.querySelector(containerID);
        span.innerHTML = '';
        let html = `<span>${this.cart.length}</span><i class="fa fa-shopping-cart" ></i>Cart`
        return span.innerHTML = html
    }

    this.removeProduct = (product) => {
        this.cart = (localStorage.getItem('cart') === null) ? [] : JSON.parse(localStorage.getItem('cart'));
        let productIndex = this.cart.findIndex(pro => pro.id === product.id);
        this.cart.splice(productIndex, 1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.buildCart('#cart');
        this.cartLength('#cart-length');
    }

    this.emptyCart = () => {
        this.cart = [];
        localStorage.removeItem('cart');
        this.buildCart('#cart');
        this.cartLength('#cart-length');
    }

    this.totalPrice = () => {
        let total = 0 
        this.cart.forEach(product => {
            total = total + product.price;
        }) 
        return total

    }
}