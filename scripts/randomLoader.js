// script for random loader and populate products

function randomLoader(numberOfItems){
    const productsContainer = document.getElementById('products-container');

    // list of images files
    const productsImages = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8'];

    // image Path Test
    console.log(imagePathAssembler(productsImages[Math.floor(Math.random()*productsImages.length)]));

    // product class
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // product image
    const productImage = document.createElement('img');
    productImage.src = imagePathAssembler(productsImages[Math.floor(Math.random()*productsImages.length)]);

    // description class
    const descriptionClass = document.createElement('div');
    descriptionClass.className = 'description'

    //description class spans
    const productBrand = document.createElement('span');
    const productBrandText = document.createTextNode("Nike");
    productBrand.className = 'product-brand';
    productBrand.appendChild(productBrandText);

    const productTitle = document.createElement('span');
    const productTitleText = document.createTextNode("This just got added");
    productTitle.className = 'product-title'
    productTitle.appendChild(productTitleText);

    // product rate class
    const productRateDiv = document.createElement('div');
    productRateDiv.className = "product-rate";

    // product rate stars
    // const productRateScore = document.createElement('i');
    // productRateScore.className = 'fas fa-star';
 
    // product price
    const productPrice = document.createElement('span');
    productPrice.className = 'product-price';

    let productPriceValue = Math.random()*100;
    productPriceValue = productPriceValue.toFixed(2);
    const productPriceValueText = document.createTextNode(String(productPriceValue));
    productPrice.appendChild(productPriceValueText);

    // product shopping cart
    const cartShoppingLink = document.createElement('a');
    cartShoppingLink.href = '#';

    const cartShopping = document.createElement('i');
    cartShopping.className = 'cart fa fa-cart-shopping';

    cartShoppingLink.appendChild(cartShopping);

    // Appends
    productDiv.appendChild(productImage);
    productDiv.appendChild(descriptionClass);
    productDiv.appendChild(cartShoppingLink);

    descriptionClass.appendChild(productBrand);
    descriptionClass.appendChild(productTitle);

    // product rate stars score
    let randomScore = Math.floor(Math.random()*6)
    if (randomScore==0) {
        randomScore = 1;
    }
    console.log(randomScore);
    for (i=1; i<=randomScore; i++) {
        const productRateScore = document.createElement('i');
        productRateScore.className = 'fas fa-star';
        productRateDiv.appendChild(productRateScore);
    }
    descriptionClass.appendChild(productRateDiv);
    descriptionClass.appendChild(productPrice);

    productsContainer.appendChild(productDiv);

}

function imagePathAssembler(productImageName) {
    const productsImagesPath = ['./img/products/'];
    const productsImagesExtension = '.jpg';
    const productsImagesFullPath = productsImagesPath + productImageName + productsImagesExtension;
    return productsImagesFullPath;
}

