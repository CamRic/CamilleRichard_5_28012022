// recuperer url
var str_Url = document.location.href;
var url = new URL(str_Url);

// recuperer id
var productId = url.searchParams.get("id");


/*****************
****************** FONCTIONS
*****************/

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
}

// ajouter produit au panier
function setProductOrderEvent(productId) {
    document.getElementById("addToCart").addEventListener("click", function() {
        // si pas de couleur choisie
        if (document.getElementById("colors").options[document.getElementById("colors").selectedIndex].value == 0) {
            console.log("erreur: couleur non valide")
        } else {
            let orderedProduct = {
                id: productId,
                color: document.getElementById("colors").options[document.getElementById("colors").selectedIndex].text,
                quantity: parseInt(document.getElementById("quantity").value),
                }
            addProductToCart(orderedProduct);
            console.log("produit ajouté")
        }
        
    })
}


/*****************
****************** SCRIPT
*****************/

addProductDataToPage(productId)
setProductOrderEvent(productId)