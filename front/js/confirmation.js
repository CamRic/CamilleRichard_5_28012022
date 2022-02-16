// recuperer num de commande
var p_url = new URL(document.location.href);
var orderId = p_url.searchParams.get("orderId");

// afficher num de commande
document.getElementById("orderId").textContent = orderId;