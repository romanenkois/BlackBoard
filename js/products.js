
function addProduct(productId, productName, productPrice) {
    fetch(`images/products/${productId}/${productId}.png`, { method: 'HEAD' })
    .then(res => {
        if (res.ok) {
            productImage = `images/products/${productId}/${productId}.png`
        } else {
            productImage = `images/products/defaultImg.png`
        }
        document.getElementById("products").insertAdjacentHTML("beforeend",
        `<div class="col-lg-4 col-6 product"><a href="product.html?${productId}"><img class="promo" src="${productImage}" alt="image"></a><p class="product-name">${productName}</p><p class="product-price">${productPrice} грн</p></div>`);
    })
    .catch(err => console.log('Error:', err))
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

var filter = (location.href.substring(location.href.lastIndexOf('?') + 1));
var filt = (filter.split("="))
if (filt[1] != null) {
    addProductType(filt[1])
} else {
    addAllProducts()
}