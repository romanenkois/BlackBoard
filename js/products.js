
function addProduct(productId, productName, productPrice) {
    document.getElementById("products").insertAdjacentHTML("beforeend",
        `<div class="col-lg-4 col-6 product"><a href="product.html?${productId}"><img class="promo" src="images/promos/promo3.png" alt="image"></a><p class="product-name">${productName}</p><p class="product-price">${productPrice} грн</p></div>`);
}

function addProductType(productType) {
    document.getElementById("products").innerHTML = "";
        fetch("products.json")
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.products.length; i++) {
                if (json.products[i].product_type == productType) {
                    addProduct(json.products[i].product_id, json.products[i].name, json.products[i].price);
                }
            }
        }
    );
}

function addAllProducts() {
    document.getElementById("products").innerHTML = "";
    fetch("products.json")
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.products.length; i++) {
                addProduct(json.products[i].product_id, json.products[i].name, json.products[i].price);
            }
        }
    );
}