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
    let existingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    let newCart = []
    let alredyAdded = false
    let productQuantity

    if ((existingCart != null) && (JSON.stringify(existingCart) != "[]")) {
        console.log("піздєцц")
        for (let i = 0; i < existingCart.length; i++) {
            console.log(existingCart[i].product_id)
            console.log(productId)
            if (existingCart[i].product_id == productId) {
                console.log("піздєцц")
                existingCart[i].product_quantity += parseInt(numberToAdd.innerHTML);
                if (document.querySelector("#shoping-cart").style.display == "block") {
                    document.querySelector(`#quantity-${productId}`).innerHTML = `${existingCart[i].product_quantity} шт`
                }
                alredyAdded = true;
                productQuantity = existingCart[i].product_quantity 
                newCart.push(existingCart[i]);
                
            } else {
                newCart.push(({product_id: productId, product_quantity: parseInt(numberToAdd.innerHTML)}));
                productQuantity = parseInt(numberToAdd.innerHTML)
            }
        }
    } else {
        newCart.push(({product_id: productId, product_quantity: parseInt(numberToAdd.innerHTML)}));
        productQuantity = parseInt(numberToAdd.innerHTML)
        alredyAdded = false;
    }
    console.log(newCart)
    localStorage.setItem("shoppingCart", JSON.stringify(newCart));
    console.log(document.querySelector("#shoping-cart").style.display)
    console.log(document.querySelector("#shoping-cart").style.display == "block")
    if (document.querySelector("#shoping-cart").style.display == "block") {
        fetch("products.json")
        .then(response => response.json())
        .then(json => {
            for (let j = 0; j < json.products.length; j++) {
                if (productId == json.products[j].product_id) {
                    if (alredyAdded == false) {
                        console.log("renderhsjhfhsireu9e48372843782734827843")
                        ocument.querySelector(`#shopping-cart-products`).innerHTML = ""
                        document.querySelector(`#shopping-cart-products`).insertAdjacentHTML("beforeend",`
                        <div id="render-${productId}" class="shopping-cart-product row">
                            <div class="col-3" >
                                <img style="width: 100%; padding: 5px 0px 5px 0px;" src="images/promos/promo8.png">
                            </div>
                            <div class="col-9" style="display: flex">
                                <div class="row">
                                    <p class="col-12 product-name">${json.products[j].name}</p>
                                    <div class="col-7 justify-content-center">
                                        <p class="minus-product justify-content-center" style="display: inline-block" onclick="minusProduct('${json.products[j].product_id}')">-</p>
                                        <p id="quantity-${json.products[j].product_id}" class="product-name text-center" style="display: inline-block">${productQuantity} шт</p>
                                        <p class="add-product justify-content-center" style="display: inline-block" onclick="plusProduct('${json.products[j].product_id}')">+</p>
                                    </div>
                                    <div class="col-5 justify-content-center">
                                        <p id="price-${json.products[j].price}" class="product-price">${json.products[j].price * productQuantity} грн.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `)
                    } else {
                        document.querySelector(`#quantity-${json.products[j].product_id}`).innerHTML = `${productQuantity} шт`
                    }
                }
            }
            renderPrices()
        })
    }
})