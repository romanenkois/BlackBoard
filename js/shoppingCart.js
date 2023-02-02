function checkIfCartEmpty() {
    let shoppingCartData = localStorage.getItem("shoppingCart")
    if ((shoppingCartData != null) && (shoppingCartData != "[]")) {
    } else {
        location.href = "shoppingCartEmpty.html"
    }
}

checkIfCartEmpty()