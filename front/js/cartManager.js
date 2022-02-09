/*
Gestion du panier
*/

function getOrderList() {
    let orderList = localStorage.getItem("orderList");
    if (orderList == null) {
        return [];
    } else {
        return JSON.parse(orderList);
    }
}

function saveOrderList(orderList) {
    localStorage.setItem("orderList", JSON.stringify(orderList));
}

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
