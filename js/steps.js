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
function checkIfSecondStepIsDone() {
    
        
}
nextBtn2.addEventListener("click", function () {
    var name = document.querySelector("#name").value;
    var surname = document.querySelector("#surname").value;
    var phone = document.querySelector("#phone").value;
    var email = document.querySelector("#email").value;
    var address = document.querySelector("#address").value;
    var city = document.querySelector("#city").value;
    var country = document.querySelector("#country").value;
    var zip = document.querySelector("#zip").value;
    if (name != "" && surname != "" && phone != "" && email != "" && address != "" && city != "" && country != "" && zip != "") {
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
    var cardNumber = document.querySelector("#cardNumber").value;
    var cardDate = document.querySelector("#cardDate").value;
    var cardCvv = document.querySelector("#cardCvv").value;
    if (cardNumber != "" && cardDate != "" && cardCvv != "") {
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

