// script for random loader and populate products

function randomLoader(numberOfItems) {
    for (i = 1; i <= numberOfItems; i++) {
        setTimeout(() => { createItem(); }, i * 10); // delay for don't crash browser
    }
}
function createItem() {
    // products container
    const productsContainer = document.getElementById('products-container');

    // product div
    const productDiv = createProductDiv();

    // product image
    const productImage = createProductImage();

    // description div
    const descriptionClass = createDescriptionDiv();
    const descriptionSpans = createDescriptionSpans();
    const productBrand = descriptionSpans.productBrand;
    const productTitle = descriptionSpans.productTitle;

    // product rate div
    const productRateDiv = createRateDiv();

    // product price span
    const productPrice = createPriceSpan();

    // product shopping cart
    cartShoppingLink = createShoppingCart();

    // product rate stars score
    createRandomScore(productRateDiv, randomScoreGenerator());

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

// *********************************
// ***** - Functions section - *****
// *********************************

// Function for parse images paths
function imagePathAssembler(productImageName) {
    const productsImagesPath = ['./img/products/'];
    const productsImagesExtension = '.jpg';
    const productsImagesFullPath = productsImagesPath + productImageName + productsImagesExtension;
    return productsImagesFullPath;
}

// Function for create a random price
function randomPriceGenerator() {
    let productPriceValue = Math.random() * 100;
    productPriceValue = productPriceValue.toFixed(2);
    const productPriceValueText = document.createTextNode(String(productPriceValue));
    return productPriceValueText;
}

// Function for create a random score
function randomScoreGenerator() {
    let randomScore = Math.floor(Math.random() * 6)
    if (randomScore == 0) {
        randomScore = 1;
    }
    return randomScore;
}

// Function for create product class div
function createProductDiv() {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    return productDiv;
}

// Function for create product image 
function createProductImage() {
    // list of images files
    const productsImages = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8'];
    const productImage = document.createElement('img');
    productImage.src = imagePathAssembler(productsImages[Math.floor(Math.random() * productsImages.length)]);
    return productImage;
}

// Function for create description div
function createDescriptionDiv() {
    const descriptionClass = document.createElement('div');
    descriptionClass.className = 'description'
    return descriptionClass;
}

// Function for create descriptions spans
function createDescriptionSpans() {
    const productBrand = document.createElement('span');
    const productBrandText = document.createTextNode("Adidas");
    productBrand.className = 'product-brand';
    productBrand.appendChild(productBrandText);
    const productTitle = document.createElement('span');
    const productTitleText = document.createTextNode("Produto");
    productTitle.className = 'product-title';
    productTitle.appendChild(productTitleText);
    return {
        productBrand: productBrand,
        productTitle: productTitle,
    }
}

// Function for create rate div
function createRateDiv() {
    const productRateDiv = document.createElement('div');
    productRateDiv.className = "product-rate";
    return productRateDiv;
}

// Function for create price span
function createPriceSpan() {
    const productPrice = document.createElement('span');
    productPrice.className = 'product-price';
    productPrice.appendChild(randomPriceGenerator());
    return productPrice;
}

// Function for create shopping cart
function createShoppingCart() {
    const cartShoppingLink = document.createElement('a');
    cartShoppingLink.href = '#';
    const cartShopping = document.createElement('i');
    cartShopping.className = 'cart fa fa-cart-shopping';
    cartShoppingLink.appendChild(cartShopping);
    return cartShoppingLink;
}

// Function for create random score
function createRandomScore(productRateDiv, randomScore) {
    // product rate stars score
    for (i = 1; i <= randomScore; i++) {
        const productRateScore = document.createElement('i');
        productRateScore.className = 'fas fa-star';
        productRateDiv.appendChild(productRateScore);
    }
}