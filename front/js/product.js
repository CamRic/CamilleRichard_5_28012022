// recuperer url
var str_Url = document.location.href;
var url = new URL(str_Url);

// recuperer id
var productId = url.searchParams.get("id");

// recuperer produit
async function getProduct(productId) {
    let product = await fetch("http://localhost:3000/api/products/" + productId) // example id: 055743915a544fde83cfdfc904935ee7
    return product.json()
}

// ajouter donnees produit à la page
function addProductDataToPage(productId) {
    getProduct(productId)
            .then(res => {
            product = res
            document.querySelector(".item__img").innerHTML += `<img src="${product.imageUrl}" alt="${product.altTxt}" />`;
            document.getElementById("title").textContent = product.name;
            document.getElementById("price").textContent = product.price;
            document.getElementById("description").textContent = product.description;
            for (let i = 0; i < product.colors.length; i++) {
                document.getElementById("colors").innerHTML += `<option value="${product.colors[i]}">` + product.colors[i] + '</option>';
            }
            })
            .catch(err => {
                console.log(err)
            })
}

// ajouter produit au panier
function setProductOrderEvent(productId) {
    document.getElementById("addToCart").addEventListener("click", function() {
        let orderedProduct = {
                                    id: productId,
                                    color: document.getElementById("colors").options[document.getElementById("colors").selectedIndex].text,
                                    quantity: parseInt(document.getElementById("quantity").value),
                            }
        addProductToCart(orderedProduct);
    })
}


// script
addProductDataToPage(productId)
setProductOrderEvent(productId)