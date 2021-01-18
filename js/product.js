const product = {
    name: "Fancy Product",
    price: 99,
    onSale: true,
};

const container = document.querySelector(".container");
let priceDisplay = "unavailable";

if(product.price) {
    priceDisplay = product.price;
}

let decoration ="none";

if(product.onSale) {
    decoration = "underline";
}

container.innerHTML = `
<div class="product">
<h2 style="text-decoration: ${decoration}">${product.name}</h2>
<p>Price: ${priceDisplay}</p>
</div>
`;



