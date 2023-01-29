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

