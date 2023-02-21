nextBtn1 = document.querySelector("#step-next-btn1");
nextBtn2 = document.querySelector("#step-next-btn2");
nextBtn3 = document.querySelector("#step-next-btn3");
nextBtn4 = document.querySelector("#step-next-btn4");

content1 = document.querySelector("#step-content1");
content2 = document.querySelector("#step-content2");
content3 = document.querySelector("#step-content3");
content4 = document.querySelector("#step-content4");

stepName1 = document.querySelector("#step-name1");
stepName2 = document.querySelector("#step-name2");
stepName3 = document.querySelector("#step-name3");
stepName4 = document.querySelector("#step-name4");

function checkIfSecondStepIsCompleted() {
    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let phone = document.querySelector("#phone").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;
    let city = document.querySelector("#city").value;
    let country = document.querySelector("#country").value;
    let zip = document.querySelector("#zip").value;
    if (name != "" && surname != "" && phone != "" && email != "" && address != "" && city != "" && country != "" && zip != "") {
        return true;
    } else {
        return false;
    }
}

function checkIfThirdStepIsCompleted() {
    let cardNumber = document.querySelector("#cardNumber").value;
    let cardDate = document.querySelector("#cardDate").value;
    let cardCvv = document.querySelector("#cardCvv").value;
    if (cardNumber != "" && cardDate != "" && cardCvv != "") {
        return true;
    } else {
        return false;
    }
}

nextBtn1.addEventListener("click", function () {
    content1.style.display = "none";
    content2.style.display = "block";
    stepName1.style.cursor = "pointer";
    stepName1.addEventListener("click", function () {
        content4.style.display = "none";
        content3.style.display = "none";
        content2.style.display = "none";
        content1.style.display = "block";
    });
});

nextBtn2.addEventListener("click", function () {
    if (checkIfSecondStepIsCompleted()) {
        content2.style.display = "none";
        content3.style.display = "block";
        stepName2.style.cursor = "pointer";
        stepName2.addEventListener("click", function () {
            content4.style.display = "none";
            content3.style.display = "none";
            content2.style.display = "block";
            content1.style.display = "none";
        });
    }
});

nextBtn3.addEventListener("click", function () {
    if (checkIfThirdStepIsCompleted()) {
        content3.style.display = "none";
        content4.style.display = "block";
        stepName3.style.cursor = "pointer";
        stepName3.addEventListener("click", function () {
            content4.style.display = "none";
            content3.style.display = "block";
            content2.style.display = "none";
            content1.style.display = "none";
        });
    }
    if (checkIfSecondStepIsCompleted() && checkIfThirdStepIsCompleted()) {
        document.querySelector("#make-purchace").style.cursor = "pointer";
        document.querySelector("#make-purchace").addEventListener("click", function () {
            let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
            products = shoppingCart;
        
            if (document.querySelector("#promoCode") != null) {
                promoCode = document.querySelector("#promoCode").value;
            } else {
                promoCode = "";
            }
            if (document.querySelector("#coment") != null) {
                coment = document.querySelector("#coment").value;
            } else {
                coment = "";
            }

            let order = {
                "name": document.querySelector("#name").value,
                "surname": document.querySelector("#surname").value,
                "phone": document.querySelector("#phone").value,
                "email": document.querySelector("#email").value,
                "address": document.querySelector("#address").value,
                "city": document.querySelector("#city").value,
                "country": document.querySelector("#country").value,
                "zip": document.querySelector("#zip").value,
                "cardNumber": document.querySelector("#cardNumber").value,
                "cardDate": document.querySelector("#cardDate").value,
                "cardCvv": document.querySelector("#cardCvv").value,
                "promoCode": promoCode,
                "coment": coment,
                "products": products
            }
            console.log(order);

            var token = '6155220342:AAEfs_U045oGDdvJHRwKeJS51MEvLKbpSFg';
            var chat_id = 700511901;
            var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${JSON.stringify(order)}`
            
            let api = new XMLHttpRequest();
            api.open("GET", url, true);
            api.send();

            localStorage.removeItem("shoppingCart");
            window.alert("ваш заказ було прийнято, дякуємо за покупку!");
            window.location.href = "index.html";
        });
    }
});

nextBtn4.addEventListener("click", function () {
    content4.style.display = "none";
    stepName4.style.cursor = "pointer";
    stepName4.addEventListener("click", function () {
        content4.style.display = "block";
        content3.style.display = "none";
        content2.style.display = "none";
        content1.style.display = "none";
    });
});

