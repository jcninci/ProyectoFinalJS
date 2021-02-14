function adidasProducts() {

    this.data = [];
    this.results = [];

    this.init = (data) => this.data = data;

    this.getById = (id) => this.data.filter((product) => product.id === id);

    this.buildHTMLCard = function(product) {
        return `<div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="products"><h2 class="product-prices">${product.models}</h2></div>
                        <div id="card-img"><img src="${product.img}" class="card-img-top" alt="..."></div>
                        <div class="add-to-cart" onclick="addToCart('${product.id}')">
                        <p id="add-cart">ADD TO CART</p>
                        </div>
                        <div class="products-price">
                        <h2 class="h2-price">Price:</h2>
                        <p class="p-price">$${product.price}</p>
                        </div>
                    </div>
                </div>`
    }

    this.listProduct = (rowClass, sourceData) => {
        let row = document.querySelector(rowClass);
        row.innerHTML = '';
        let html = '';
        this[sourceData].forEach(product => {
            html += this.buildHTMLCard(product);
        })

        row.innerHTML = html;
    }

    this.search = function (key) {
        this.results = []
        this.data.forEach((product) => {
            if(product.models.toLowerCase().includes(key.toLowerCase())){
                this.results.push(product);
            }
        })
        return this.results;
    }

}