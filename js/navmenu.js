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

if (document.nodeName != "product.html") {
    navZipka = document.querySelector("#nav-zipka");
    navTshirt = document.querySelector("#nav-tshirt");
    navPants = document.querySelector("#nav-pants");
    navScarf = document.querySelector("#nav-scarf");

    navZipka.addEventListener("click", function() {
        window.location.replace("clothes.html?category=zipka");
    });
    navTshirt.addEventListener("click", function() {
        window.location.replace("clothes.html?category=tshirt");
    });
    navPants.addEventListener("click", function() {
        window.location.replace("clothes.html?category=pants");
    });
    navScarf.addEventListener("click", function() {
        window.location.replace("clothes.html?category=scarf");
    });
}