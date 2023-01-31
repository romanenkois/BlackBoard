
function checkIfCartEmpty() {
    let shoppingCartData = localStorage.getItem("shoppingCart")
    console.log("бля")
    if ((shoppingCartData != null) && (shoppingCartData != "[]")) {
        console.log("мурмур")
    } else {
        location.href = "shoppingCartEmpty.html"
    }
}
checkIfCartEmpty()