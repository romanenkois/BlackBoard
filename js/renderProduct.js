var productId = (location.href.substring(location.href.lastIndexOf('?') + 1));

function checkIfProductExists(productId) {
    var product = products.find(function (product) {
        return product.id === productId;
    });
    if (product) {
        return true;
    } else {
        return false;
    }
}