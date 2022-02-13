// gerer l'ajout d'un produit sur la page
function addHtmlProduct(jsonProduct) {
    let product = new Product(jsonProduct)
    document.querySelector('.items').innerHTML += `<a href='product.html?id=${product._id}'>
                                                                <article>
                                                                    <img src='${product.imageUrl}' alt='${product.altTxt}'>
                                                                    <h3 class='productName'>${product.name}</h3>
                                                                    <p class='productDescription'>${product.description}</p>
                                                                </article>
                                                                </a>`
}

// recuperer la liste de produits a afficher
async function getProductList() {
    let productList = await fetch("http://localhost:3000/api/products/")
    return productList.json()
}

// load product on page
getProductList()
    .then(data => {
        console.log(data)
        productList = data
        console.log(productList)
        for (product in productList) {
            console.log("adding product: " + product)
            addHtmlProduct(product)
        }
    })


/*
loadConfig().then(data => {
    config = data; // getting api url
    fetch(config.host + "/api/products")
        .then(data => data.json()) // getting product list
        .then(jsonProductList => {
            for (jsonProduct of jsonProductList) {
                let product = new Product(jsonProduct); // creating an object for one product
                // adding html for each product
                document.querySelector('.items').innerHTML += `<a href='product.html?id=${product._id}'>
                                                                <article>
                                                                    <img src='${product.imageUrl}' alt='${product.altTxt}'>
                                                                    <h3 class='productName'>${product.name}</h3>
                                                                    <p class='productDescription'>${product.description}</p>
                                                                </article>
                                                                </a>`;
                
            }
        })
})
*/