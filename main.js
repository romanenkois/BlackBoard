function get_menu() {
    if(document.getElementById("filter") == null){
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
}

var productType = null;

function addProductType(productType) {
    document.getElementById("products").innerHTML = "";
        fetch("products.json")
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.products.length; i++) {
                if (json.products[i].product_type == productType) {
                    addProduct(json.products[i].name, json.products[i].price);
                }
            }
        }
    );
}

function addProduct(productName, productPrice) {
    document.getElementById("products").insertAdjacentHTML("beforeend",
        `<div class="col-lg-4 col-6 product"><a href="product.html"><img class="promo" src="images/promos/promo3.png" alt="image"></a><p class="product-name">${productName}</p><p class="product-price">${productPrice} грн</p></div>`);
}

function addAllProducts() {
    document.getElementById("products").innerHTML = "";
    fetch("products.json")
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.products.length; i++) {
                addProduct(json.products[i].name, json.products[i].price);
            }
        }
    );
}

console.log(productType, "product_type1");

function redirect_to_products(product_type) {
    self.location="clothes.html";
    console.log(product_type, "product_type2");
    productType = product_type;
    console.log(productType, "product_type3");
}

console.log(productType, "product_type4");