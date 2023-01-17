var productId = (location.href.substring(location.href.lastIndexOf('?') + 1));

function checkIfProductExists(productId) {
    var productExists = false;
    fetch("products.json")
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.products.length; i++) {
            if (json.products[i].product_id == productId) {
                productExists = true;
            }
        }
        console.log(productExists);
        return productExists;
    });
    
}

function checkIfImageExists(productId) {

}

function renderProduct(productId) {
    console.log("я лох");
    fetch("products.json")
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.products.length; i++) {
            if (json.products[i].product_id == productId) {
                document.querySelector("#product-name").innerHTML = json.products[i].name;
                document.querySelector("#product-price").innerHTML = `${json.products[i].price} грн`;
                if (json.products[i].description != null) {document.querySelector("#product-info").innerHTML = json.products[i].description;}

                fetch(`images/products/${productId}`, { method: 'HEAD' })
                .then(res => {
                    if (res.ok) {
                        document.querySelector("#product-img").src = `images/products/${productId}/${productId}.png`
                    } else {
                        document.querySelector("#product-img").src = `images/promos/promo.png`
                    }
                })
                .catch(err => console.log('Error:', err))
                
            }
        }
    })
}
    
renderProduct(productId)