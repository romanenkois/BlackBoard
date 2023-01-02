

function get_menu() {
    var filterExists = document.getElementById("filter");
    if(filterExists == null){
        if (document.getElementById("navmenu").style.display=="block") {
            document.getElementById("navmenu").style.display="none"
        }
        else {

            document.getElementById("navmenu").style.display="block"
        }
    } else {
        if (document.getElementById("filter").style.display=="none") {
            document.getElementById("filter").style.display="block"
        } else {
            document.getElementById("filter").style.display="none"
        }
    }
}
function addProductType(productType) {
    for (let i = 0; i < 3; i++) {
        addProduct(productType, 1000);
    }
}

function addProduct(productName, productPrice) {
    document.getElementById("content").insertAdjacentHTML("beforeend",
        `<div class="col-lg-4 col-6"><a href="product.html"><img class="promo" src="promos/promo3.png" alt="image"></a><p>${productName}</p><p>${productPrice} грн</p></div>`);
}