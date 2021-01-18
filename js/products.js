const products = [
    {
        name: "Fancy Product",
        price: 40,
        soldOut: true,
    },
    {
        name: "Another Product",
        soldOut: false,
    },
    {
        name: "Cheap Product",
        price: 10,
        soldOut: true,
    },
];

const container = document.querySelector(".container");
let html = "";



for(let i = 0; i < products.length; i++) {
    let productPrice = "Price missing";

    if(products[i].price) {
        productPrice = products[i].price;
    }

    let colour = "green";

    if(products[i].soldOut) {
        colour = "red";
    }

    html += 
    `<div class="item">
    <h2 style="color: ${colour}">${products[i].name}</h2>
    <p>Price: ${productPrice}</p>
    </div>`;
}

container.innerHTML = html;
