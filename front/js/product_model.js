// Représentation d'un canapé
class Product {
    constructor(jsonProduct) {
        jsonProduct && Object.assign(this, jsonProduct);
    }
}

// recuperer donnees produit avec l'id
async function getProduct(productId) {
    let product = await fetch("http://localhost:3000/api/products/" + productId) // example id: 055743915a544fde83cfdfc904935ee7
    return product.json()
}