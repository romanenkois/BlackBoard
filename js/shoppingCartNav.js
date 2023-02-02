function renderPrices() {
    console.log("мурмур")
    var shoppingCartData = localStorage.getItem("shoppingCart")
    if ((shoppingCartData != null) && (shoppingCartData!= "[]")) {
        console.log(111)
        shoppingCartData = JSON.parse(shoppingCartData)
        totalPrice = 0
        for (let i = 0; i < shoppingCartData.length; i++) {
            fetch("products.json")
            .then(response => response.json())
            .then(json => {
                for (let j = 0; j < json.products.length; j++) {
                    console.log("піздєц сру")
                    if (shoppingCartData[i].product_id == json.products[j].product_id) {
                        document.getElementById(`price-${json.products[j].price}`).innerHTML = `${json.products[j].price * shoppingCartData[i].product_quantity} грн`

                        totalPrice += json.products[j].price * shoppingCartData[i].product_quantity
                        document.getElementById("shopping-cart-total-price").innerHTML = "загальна вартість: " + totalPrice + " грн."
                        document.getElementById("shopping-cart-total-price").style.display = "block"
                        document.getElementById("purchase-btn").style.display = "block";
                    }
                }
            })
        }
    } else {
        console.log(222)
        document.getElementById("shopping-cart-total-price").style.display = "none"
        document.getElementById("purchase-btn").style.display = "none";
    }
    console.log(333)
}

function minusProduct(prdctId) {
    existingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    let newCart = []

    if (existingCart != null) {
        for (let i = 0; i < existingCart.length; i++) {
            if (existingCart[i].product_id == prdctId) {
                if (existingCart[i].product_quantity > 1) {
                    existingCart[i].product_quantity -= 1;
                    document.querySelector(`#quantity-${prdctId}`).innerHTML = `${existingCart[i].product_quantity} шт`
                    newCart.push(existingCart[i]);
                } else { 
                    document.querySelector(`#render-${prdctId}`).remove()
                }      
            } else {
                newCart.push(existingCart[i])
            }
        }
    }
    if (JSON.stringify(newCart) == "[]") {
        document.getElementById("shopping-cart-products").insertAdjacentHTML("beforeend","<p class='shopping-cart-product' style='text-align: center' >Поки тут пусто</p>")
        document.getElementById("shopping-cart-total-price").style.display = "none";
        document.getElementById("purchase-btn").style.display = "none";
    }
    localStorage.setItem("shoppingCart", JSON.stringify(newCart));

    renderPrices()
}

function plusProduct(prdctId) {    
    existingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    let newCart = []
    let alredyAdded = false

    if (existingCart != null) {
        for (let i = 0; i < existingCart.length; i++) {

            if (existingCart[i].product_id == prdctId) {
                existingCart[i].product_quantity += 1;
                document.querySelector(`#quantity-${prdctId}`).innerHTML = `${existingCart[i].product_quantity} шт`
                alredyAdded = true;
                newCart.push(existingCart[i]);
                
            } else {
                newCart.push(existingCart[i])
            }
        }
    }
    if (alredyAdded != true) {
        newCart.push(({product_id: prdctId, product_quantity: 1}));

        var shoppingCartData = localStorage.getItem("shoppingCart")
        fetch("products.json")
        .then(response => response.json())
        .then(json => {
            for (let j = 0; j < json.products.length; j++) {
                if (prdctId == json.products[j].product_id) {
                    document.querySelector(`${prdctId}`).insertAdjacentHTML("beforeend",`
                    <div id="render-${shoppingCartData[i].product_id}" class="shopping-cart-product row">
                        <div class="col-3" >
                            <img style="width: 100%; padding: 5px 0px 5px 0px;" src="images/promos/promo8.png">
                        </div>
                        <div class="col-9" style="display: flex">
                            <div class="row">
                                <p class="col-12 product-name">${json.products[j].name}</p>
                                <div class="col-7 justify-content-center">
                                    <p class="minus-product justify-content-center" style="display: inline-block" onclick="minusProduct('${json.products[j].product_id}')">-</p>
                                    <p id="quantity-${shoppingCartData[i].product_id}" class="product-name text-center" style="display: inline-block">${shoppingCartData[i].product_quantity} шт</p>
                                    <p class="add-product justify-content-center" style="display: inline-block" onclick="plusProduct('${json.products[j].product_id}')">+</p>
                                </div>
                                <div class="col-5 justify-content-center">
                                    <p id="price-${json.products[j].price}" class="product-price">${json.products[j].price * shoppingCartData[i].product_quantity} грн.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `)
                }
            }
        })
    }
    localStorage.setItem("shoppingCart", JSON.stringify(newCart));
    renderPrices()
}

function shoppingCartRender() {
    var shoppingCartData = localStorage.getItem("shoppingCart")
    document.getElementById("shopping-cart-products").innerHTML = "";
    console.log(shoppingCartData)
    if ((shoppingCartData != null) && (shoppingCartData!= "[]")) {
        shoppingCartData = JSON.parse(shoppingCartData)
        totalPrice = 0
        for (let i = 0; i < shoppingCartData.length; i++) {
            fetch("products.json")
            .then(response => response.json())
            .then(json => {
                for (let j = 0; j < json.products.length; j++) {
                    if (shoppingCartData[i].product_id == json.products[j].product_id) {
                        console.log(shoppingCartData[i])
                        console.log(json.products[j].product_id)
                        console.log(typeof(json.products[j].product_id))
                        document.getElementById("shopping-cart-products").insertAdjacentHTML("beforeend",`
                        <div id="render-${shoppingCartData[i].product_id}" class="shopping-cart-product row">
                            <div class="col-3" >
                                <img style="width: 100%; padding: 5px 0px 5px 0px;" src="images/promos/promo8.png">
                            </div>
                            <div class="col-9" style="display: flex">
                                <div class="row">
                                    <p class="col-12 product-name">${json.products[j].name}</p>
                                    <div class="col-7 justify-content-center">
                                        <p class="minus-product justify-content-center" style="display: inline-block" onclick="minusProduct('${json.products[j].product_id}')">-</p>
                                        <p id="quantity-${shoppingCartData[i].product_id}" class="product-name text-center" style="display: inline-block">${shoppingCartData[i].product_quantity} шт</p>
                                        <p class="add-product justify-content-center" style="display: inline-block" onclick="plusProduct('${json.products[j].product_id}')">+</p>
                                    </div>
                                    <div class="col-5 justify-content-center">
                                        <p id="price-${json.products[j].price}" class="product-price">${json.products[j].price * shoppingCartData[i].product_quantity} грн.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `)
                        totalPrice += json.products[j].price * shoppingCartData[i].product_quantity
                        document.getElementById("shopping-cart-total-price").innerHTML = "загальна вартість: " + totalPrice + " грн."
                        document.getElementById("shopping-cart-total-price").style.display = "block"
                        document.getElementById("purchase-btn").style.display = "block";
                    }
                }
            })
        }
    } else {
        document.getElementById("shopping-cart-products").insertAdjacentHTML("beforeend","<p class='shopping-cart-product' style='text-align: center' >Поки тут пусто</p>")
        document.getElementById("shopping-cart-total-price").style.display = "none";
        document.getElementById("purchase-btn").style.display = "none";
    }
}