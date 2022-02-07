// Représentation d'un canapé

class Product {
    constructor(jsonProduct) {
        jsonProduct && Object.assign(this, jsonProduct);
    }
}