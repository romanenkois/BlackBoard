

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
        if (document.getElementById("filter").style.display=="block") {
            document.getElementById("filter").style.display="none"
        } else {
            document.getElementById("filter").style.display="block"
        }
    }
}
