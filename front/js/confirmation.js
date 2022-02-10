var p_url = new URL(document.location.href);

var orderId = p_url.searchParams.get("orderId");

document.getElementById("orderId").innerText = orderId;