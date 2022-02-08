
// recuperer url
var str_Url = document.location.href;
var url = new URL(str_Url);

// recuperer id
var productId = url.searchParams.get("id");

// recuperer produit

loadConfig().then(data => {
    config = data;
    fetch(config.host + "/api/products/" + productId)
        .then(data => data.json())
        .then(jsonProduct => {
            let product = new Product(jsonProduct);
            document.querySelector(".item__img").innerHTML += `<img src="${product.imageUrl}" alt="${product.altTxt00}" />`;
            document.getElementById("title").textContent = product.name;
            document.getElementById("price").textContent = product.price;
            document.getElementById("description").textContent = product.description;
        })
})