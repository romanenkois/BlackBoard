if (location.pathname == "/product.html") {
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
}

if (location.pathname == "/shoppingCart.html") {
    console.log("мур")
}