
loadConfig().then(data => {
    config = data; // getting api url
    fetch(config.host + "/api/products").then(data => data.json()) // getting product list
        .then(jsonProductList => {
            for (jsonProduct of jsonProductList) {
                let product = new Product(jsonProduct); // creating an object for one product
                // adding html for each product
                document.querySelector('.items').innerHTML += `<a href=''>
                                                                <article>
                                                                    <img src='${product.imageUrl}' alt='${product.altTxt}'>
                                                                    <h3 class='productName'>${product.name}</h3>
                                                                    <p class='productDescription'>${product.description}</p>
                                                                </article>
                                                                </a>`;
                
            }
        })
})