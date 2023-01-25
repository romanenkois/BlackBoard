var menuBtn = document.querySelector("#menubtn")
var searchBtn = document.querySelector("#search-btn")
var cartBtn = document.querySelector("#shopping-cart-btn")
var urlLocation = ((location.href.substring(location.href.lastIndexOf('/') + 1).split("?"))[0])

menuBtn.addEventListener("click", function(){
    if (urlLocation != "clothes.html") {
        if (document.getElementById("navmenu").style.display=="block") {
            document.getElementById("navmenu").style.display="none";
            document.getElementById("menubtn").style.color="var(--light-gray)";
        }
        else {
            document.getElementById("navmenu").style.display="block";
            document.getElementById("menubtn").style.color="var(--light-gray-hover)";
        }
    } else {
        if (document.getElementById("filter").style.display=="none") {
            document.getElementById("filter").style.display="block";
            document.getElementById("menubtn").style.color="var(--light-gray-hover)";
        } else {
            document.getElementById("filter").style.display="none";
            document.getElementById("menubtn").style.color="var(--light-gray)";
        }
    }

})

searchBtn.addEventListener("click", function(){
    if (document.getElementById("search-form").style.display=="block") {
        document.getElementById("search-form").style.display="none";
        document.getElementById("search-btn").style.color="var(--light-gray)";
    }
    else {
        document.getElementById("search-form").style.display="block";
        document.getElementById("search-btn").style.color="var(--light-gray-hover)";
    }
})

function shoppingCartRender() {
    var shoppingCartData = localStorage.getItem("shoppingCart")
    document.getElementById("shopping-cart-products").innerHTML = "";
    console.log(shoppingCartData)
    if ((shoppingCartData != null)) {
        shoppingCartData = JSON.parse(shoppingCartData)
        totalPrice = 0
        for (let i = 0; i < shoppingCartData.length; i++) {
            fetch("products.json")
            .then(response => response.json())
            .then(json => {
                for (let j = 0; j < json.products.length; j++) {
                    if (shoppingCartData[i].product_id == json.products[j].product_id) {
                        console.log(shoppingCartData[i])
                        document.getElementById("shopping-cart-products").insertAdjacentHTML("beforeend",`
                        <div class="shopping-cart-product row">
                            <div class="col-3" >
                                <img style="width: 100%; padding: 5px 0px 5px 0px;" src="images/promos/promo5.png">
                            </div>
                            <div class="col-9" style="display: flex">
                                <div class="row">
                                    <p class="col-12 product-name">${json.products[j].name}</p>
                                    <div class="col-6 justify-content-center">
                                        <p class="minus-product justify-content-center" style="display: inline-block">-</p>
                                        <p class="product-name text-center" style="display: inline-block">${shoppingCartData[i].product_quantity} шт</p>
                                        <p class="add-product justify-content-center" style="display: inline-block">+</p>
                                    </div>
                                    <div class="col-5 justify-content-center">
                                        <p class="product-price">${json.products[j].price * shoppingCartData[i].product_quantity} грн.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `)
                        totalPrice += json.products[j].price * shoppingCartData[i].product_quantity
                        document.getElementById("shopping-cart-total-price").innerHTML = "загальна вартість: " + totalPrice + " грн."
                    }
                }
            })
        }
    } else {
        document.getElementById("shopping-cart-products").insertAdjacentHTML("beforeend","<p class='shopping-cart-product' style='text-align: center' >Поки тут пусто</p>")
        document.getElementById("purchase-btn").style.display = "none";
    }
}

cartBtn.addEventListener("click", function(){
    if (document.querySelector("#shoping-cart").style.display=="block") {
        document.querySelector("#shoping-cart").style.display="none";
        document.querySelector("#shopping-cart-btn").style.color="var(--light-gray)";
    }
    else {
        document.querySelector("#shoping-cart").style.display="block";
        document.querySelector("#shopping-cart-btn").style.color="var(--light-gray-hover)";
        shoppingCartRender();
    }
})

