//


// charger données panier
let orderList = getOrderList();

// récuperer donnees produit
loadConfig().then(data => {
    config = data;
    for (product of orderList) {
        
    }
})


// fonction qui récupère photo canape
async function getProductImage(apiUrl, productId) {
    let product = await fetch(apiUrl + "/api/products/" + productId);
    product = product.json();
    return product.imageUrl;
}

async function getProductData(domainName, productId) {
    
    let prod = await fetch(domainName + "/api/products/" + productId).then(data => data.json()).then();
    return prod;
}

loadConfig().then(data => {
    config = data;
    console.log(getProductData(config.host, orderList[0].id).json().altTxt);
    console.log(getProductImage(config.host, orderList[0].id));
})

/*
// ajouter les produits du panier à la page 
loadConfig().then(data => {
    config = data;
    for (product of orderList) {
        document.getElementById("cart__items").innerHTML += `<article class="cart__item" data-id="${product.id}" data-color="${product.color}">
                                                                        <div class="cart__item__img">
                                                                            <img src="${getProductData(config.host, product.id).imageUrl}" alt="${getProductData(config.host, product.id).altTxt}">
                                                                        </div>
                                                                        <div class="cart__item__content">
                                                                            <div class="cart__item__content__description">
                                                                                <h2>${getProductData(config.host, product.id).name}</h2>
                                                                                <p>${product.color}</p>
                                                                                <p>${getProductData(config.host, product.id).price}</p>
                                                                            </div>
                                                                            <div class="cart__item__content__settings">
                                                                                <div class="cart__item__content__settings__quantity">
                                                                                    <p>Qté : </p>
                                                                                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
                                                                                </div>
                                                                                <div class="cart__item__content__settings__delete">
                                                                                    <p class="deleteItem">Supprimer</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </article> `
    }
})

// ajouter les produits du panier à la page
/*
for (product of orderList) {
    console.log("color:" + product.color);
    loadConfig().then(data => { // mettre load config avant boucle
        config = data;
        console.log("color:" + product.color);
        fetch(config.host + "/api/products/" + product.id)
            .then(data => data.json())
            .then(productdata => {
                console.log("color:" + product.color);
                document.getElementById("cart__items").innerHTML += `<article class="cart__item" data-id="${product.id}" data-color="${product.color}">
                                                                        <div class="cart__item__img">
                                                                            <img src="${productdata.imageUrl}" alt="${productdata.altTxt}">
                                                                        </div>
                                                                        <div class="cart__item__content">
                                                                            <div class="cart__item__content__description">
                                                                                <h2>${productdata.name}</h2>
                                                                                <p>${product.color}</p>
                                                                                <p>${productdata.price}</p>
                                                                            </div>
                                                                            <div class="cart__item__content__settings">
                                                                                <div class="cart__item__content__settings__quantity">
                                                                                    <p>Qté : </p>
                                                                                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
                                                                                </div>
                                                                                <div class="cart__item__content__settings__delete">
                                                                                    <p class="deleteItem">Supprimer</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </article> `
            })
    })
    
  console.log("fin boucle");
}

*/