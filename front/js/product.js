// récupérer données produit
let hosturl = await loadConfig()

console.log(hosturl)


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
            // adding product datas on page
            let product = new Product(jsonProduct);
            let productColorList = product.colors;
            document.querySelector(".item__img").innerHTML += `<img src="${product.imageUrl}" alt="${product.altTxt}" />`;
            document.getElementById("title").textContent = product.name;
            document.getElementById("price").textContent = product.price;
            document.getElementById("description").textContent = product.description;
            for (color of productColorList) {
                document.getElementById("colors").innerHTML += `<option value="${color}">` + color + '</option>';
            }

            // panier
            document.getElementById("addToCart").addEventListener("click", function() {
                console.log(getOrderList());
                let orderedProduct = {
                                        id: productId,
                                        color: document.getElementById("colors").options[document.getElementById("colors").selectedIndex].text,
                                        quantity: parseInt(document.getElementById("quantity").value),
                                        imgUrl: product.imageUrl,
                                        name: product.name,
                                        altTxt: product.altTxt,
                                        price: product.price
                                    };
                addProductToCart(orderedProduct);
                console.log(getOrderList());
            })
        })
})