var urlLocation = ((location.href.substring(location.href.lastIndexOf('/') + 1).split("?"))[0])

if (urlLocation == "product.html") {
    var buyBtn = document.querySelector("#buy-btn")

    var productId = (location.href.substring(location.href.lastIndexOf('?') + 1));

    buyBtn.addEventListener("click", function() {
        existingCart = JSON.parse(localStorage.getItem("shopingCart"));
        let newCart = []
        let alredyAdded = false

        if (existingCart != null) {
            for (let i = 0; i < existingCart.length; i++) {
                console.log(existingCart[i].product_id)

                if (existingCart[i].product_id == productId) {
                    existingCart[i].product_quantity += 1
                    alredyAdded = true
                    newCart.push(existingCart[i])
                } else {
                    newCart.push(existingCart[i])
                }
            }
            
        }
        if (alredyAdded != true) {
            newCart.push(({product_id: productId, product_quantity: 1}))
        }
        localStorage.setItem("shopingCart", JSON.stringify(newCart))
    })
}

