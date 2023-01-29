var productId = (location.href.substring(location.href.lastIndexOf('?') + 1));

function renderProduct(productId) {
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

async function checkIfProductExists(productIdFunc) {
    let myPromise = new Promise(function(resolve) {
        var productExists = false;
        fetch("products.json")
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.products.length; i++) {
                if (json.products[i].product_id == productIdFunc) {
                    productExists = true;
                }
            }
            resolve(productExists);
        });
    })
    let productExists = await myPromise;
    if (productExists == true) {
        renderProduct(productId);
    } else {
        location.href = "error404.html";
    }
}

checkIfProductExists(productId);

var productId = (location.href.substring(location.href.lastIndexOf('?') + 1));

const addBtn = document.querySelector("#add-one");
const minusBtn = document.querySelector("#minus-one");
const numberToAdd = document.querySelector("#product-number-to-add p");

addBtn.addEventListener("click", function() {
    var oldNumber = parseInt(numberToAdd.innerHTML);
    numberToAdd.innerHTML = oldNumber + 1;
})

minusBtn.addEventListener("click", function() {
    var oldNumber = parseInt(numberToAdd.innerHTML);
    if (oldNumber > 1) {
        numberToAdd.innerHTML = oldNumber - 1;
    }
})

const buyBtn = document.querySelector("#buy-btn");

buyBtn.addEventListener("click", function() {
    existingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    let newCart = []
    let alredyAdded = false

    if (existingCart != null) {
        for (let i = 0; i < existingCart.length; i++) {

            if (existingCart[i].product_id == productId) {
                if (parseInt(numberToAdd.innerHTML) > 0){
                    existingCart[i].product_quantity += parseInt(numberToAdd.innerHTML);
                    alredyAdded = true;
                    newCart.push(existingCart[i]);
                }
            } else {
                newCart.push(existingCart[i])
            }
        }
    }
    if (alredyAdded != true) {
        newCart.push(({product_id: productId, product_quantity: parseInt(numberToAdd.innerHTML)}));
    }
    localStorage.setItem("shoppingCart", JSON.stringify(newCart));
    if (document.querySelector("#shoping-cart").style.display == "block") {
        shoppingCartRender();
    }
})