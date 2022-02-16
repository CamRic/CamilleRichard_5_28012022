/*
Gestion du panier
*/

// récupérer le panier en local
function getOrderList() {
    let orderList = localStorage.getItem("orderList");
    if (orderList == null) {
        return [];
    } else {
        return JSON.parse(orderList);
    }
}

// enregistrer le panier en local
function saveOrderList(orderList) {
    localStorage.setItem("orderList", JSON.stringify(orderList));
}

// ajouter un produit au panier
function addProductToCart(orderedProduct) {
    let orderList = getOrderList();
    if (orderList.length < 1) {
        orderList.push(orderedProduct);
    } else {
        let checkProduct = 0;
        for (product of orderList) {
            if (product.id == orderedProduct.id && product.color == orderedProduct.color) {
                product.quantity = parseInt(product.quantity) + parseInt(orderedProduct.quantity);
                checkProduct++;
            }
        }
        if (checkProduct == 0) {
            orderList.push(orderedProduct);
        }
    }
    saveOrderList(orderList);
}
