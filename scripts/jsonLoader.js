// script for load products from json file

async function loadFromJSON() {
    const response = await fetch('./data/productData.json');
    const names = await response.json();

    for (let i = 0; i < names.produtos.length; i++) {
        console.log(`Processando produto ${i + 1}: ${names.produtos[i].titulo}`);
        createProduct(names.produtos[i].imagem, names.produtos[i].marca, names.produtos[i].titulo, names.produtos[i].avaliacao, names.produtos[i].preco);
    }
}

function createProduct(image, brand, title, score, price) {
    // products container
    const productsContainer = document.getElementById('products-container');

    // create product div
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // product image
    const productImage = document.createElement('img');
    productImage.src = image;

    // description div
    const descriptionClass = document.createElement('div');
    descriptionClass.className = 'description';

    const productBrand = document.createElement('span');
    const productBrandText = document.createTextNode(brand);
    productBrand.className = 'product-brand';
    productBrand.appendChild(productBrandText);

    const productTitle = document.createElement('span');
    const productTitleText = document.createTextNode(title);
    productTitle.className = 'product-title';
    productTitle.appendChild(productTitleText);

    // product rate div
    const productRateDiv = document.createElement('div');
    productRateDiv.className = "product-rate";

    // product rate score
    for (i = 1; i <= score; i++) {
        const productRateScore = document.createElement('i');
        productRateScore.className = 'fas fa-star';
        productRateDiv.appendChild(productRateScore);
    }

    // product price span
    const productPrice = document.createElement('span');
    const formatedPrice = `R$${price.toFixed(2)}`
    const productPriceText = document.createTextNode(formatedPrice);
    productPrice.className = 'product-price';
    productPrice.appendChild(productPriceText);

    // product shopping cart
    const cartShoppingLink = document.createElement('a');
    cartShoppingLink.href = '#';
    const cartShopping = document.createElement('i');
    cartShopping.className = 'cart fa fa-cart-shopping';
    cartShoppingLink.appendChild(cartShopping);

    // Appends
    productDiv.appendChild(productImage); // append new image to card
    productDiv.appendChild(descriptionClass); // append new description to card
    productDiv.appendChild(cartShoppingLink); // append new cart to card
    descriptionClass.appendChild(productBrand); // append brand
    descriptionClass.appendChild(productTitle); // append title
    descriptionClass.appendChild(productRateDiv); // append rate
    descriptionClass.appendChild(productPrice); //append price
    productsContainer.appendChild(productDiv); // adds a new card to products container
}