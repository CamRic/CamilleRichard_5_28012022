/*****************
****************** FONCTIONS
*****************/


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

// load products on page
function loadIndexProductList() {
    getProductList()
        .then((data) => {
            productList = data

            for (let i = 0; i< productList.length; i++) {
                addHtmlProduct(productList[i])
            }

        })
}


/*****************
****************** SCRIPT
*****************/

loadIndexProductList()