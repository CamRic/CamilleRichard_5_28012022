
// charger données panier
let orderList = getOrderList();

// afficher produits dans panier
function addCartToPage(orderLst) {
    for (product of orderLst) {
        document.getElementById("cart__items").innerHTML += 
            `<article class="cart__item" data-id="${product.id}" data-color="${product.color}">
                <div class="cart__item__img">
                    <img src="${product.imgUrl}" alt="${product.altTxt}">
                </div>
                <div class="cart__item__content">
                    <div class="cart__item__content__description">
                        <h2>${product.name}</h2>
                        <p>${product.color}</p>
                        <p>${product.price}</p>
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
            </article>`;

    }
}

// calculer le cout total
function addTotalPrice(cart) {
    let total = 0;
    for (product of cart) {
        total += parseInt(product.price) * parseInt(product.quantity);
    }
    document.getElementById("totalPrice").innerHTML = total;
}

// calculer le nombre d'articles
function addArticleCount(cart) {
    let articleCount = 0;
    for (product of cart) {
        articleCount += parseInt(product.quantity);
    }
    document.getElementById("totalQuantity").innerHTML = articleCount;
}

// script
addCartToPage(orderList);
addTotalPrice(orderList);
addArticleCount(orderList);

    // event listener
// deleting
document.querySelectorAll(".deleteItem").forEach(supprButton => {
    supprButton.addEventListener("click", function() {
        let id = this.closest(".cart__item").dataset.id;
        let color = this.closest(".cart__item").dataset.color;
        for (product of orderList) {
            if (product.id == id && product.color == color) {
                orderList.splice(orderList.indexOf(product));
            }
        }
        saveOrderList(orderList);
        this.closest(".cart__item").remove();
        addTotalPrice(orderList);
        addArticleCount(orderList);
    })
})

// modifying
document.querySelectorAll(".itemQuantity").forEach(quantityElement => {
    quantityElement.addEventListener("change", function() {
        let id = this.closest(".cart__item").dataset.id;
        let color = this.closest(".cart__item").dataset.color;
        for (product of orderList) {
            if (product.id == id && product.color == color) {
                product.quantity = this.value;
            }
            saveOrderList(orderList);
            addTotalPrice(orderList);
            addArticleCount(orderList);
        }
    })
})


// fonction envoi requete
function sendOrder(order) {
    let order_id;
    loadConfig().then(data => {
        config = data;
        let responssss = fetch(`${config.host}/api/products/order`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(response => response.json())
        .then(response => {
            order_id = response;
            console.log(order_id);
        })
    })
    return order_id;
}

function sendOrderr(order) {
    let resp = fetch("http://localhost:3000/api/products/order", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    return resp;
}


// envoi formulaire

document.getElementById("order").addEventListener("click", function() {
    let confirmationlink;
    let nameRegex = /^[a-zA-Z-]/;
    let emailRegex = /^([a-zA-Z_.-]+@[a-zA-Z-]{2,}[.][a-zA-Z]{2,4})$/;
    let cityRegex = /^[a-zA-Z-]/;
    let errorMessage = "Entrée non valide";
    let validInputCount = 0;
    if ( !document.getElementById("firstName").value.match(nameRegex)) {
        console.log(document.getElementById("firstName").value);
        document.getElementById("firstNameErrorMsg").innerText = errorMessage;
    } else {
        validInputCount++;
    }
    if ( !document.getElementById("lastName").value.match(nameRegex)) {
        console.log(document.getElementById("lastName").value);
        document.getElementById("lastNameErrorMsg").innerText = errorMessage;
    } else {
        validInputCount++;
    }
    if ( !document.getElementById("email").value.match(emailRegex)) {
        console.log(errorMessage);
        document.getElementById("emailErrorMsg").innerText = errorMessage;
    } else {
        validInputCount++;
    }
    if ( !document.getElementById("city").value.match(cityRegex)) {
        console.log(document.getElementById("city").value);
        document.getElementById("cityErrorMsg").innerText = errorMessage;
    } else {
        validInputCount++;
    }
    let inputAdress = document.getElementById("address").value;
    if (inputAdress.length < 1) {
        document.getElementById("addressErrorMsg").innerText = errorMessage;
    } else {
        validInputCount++;
    }

    console.log(validInputCount);

    if (validInputCount == 5) {
        let orderedProducts = [];
        for (product of orderList) {
            orderedProducts.push(product.id);
        }
        let order = {
            contact: {
                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("firstName").value,
                address: document.getElementById("address").value,
                city: document.getElementById("city").value,
                email: document.getElementById("email").value
            },
            products: orderedProducts
        }

        console.log(order);
        sendOrderr(order)
            .then(response => response.json())
            .then(response => {
                document.location.href = "confirmation.html?orderId=" + response.orderId;
            })
    }

})


