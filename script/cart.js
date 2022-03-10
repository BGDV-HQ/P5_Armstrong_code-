let productLocalStorage = JSON.parse(localStorage.getItem("product"));


// get products from local storage
function getCartProducts() {
    for (let product in productLocalStorage) {
        let article = document.createElement("article");
        document.querySelector("#cart_items").appendChild(article);

        let productImage = document.createElement("div");
        article.appendChild(productImage);

        let image = document.createElement("img");
        productImage.appendChild(image);

        let productName = document.createElement("div");
        let name = document.createElement("h2");
        productName.appendChild(name);

        let productPrice = document.createElement("div");
        let price = document.createElement("p");
        productPrice.appendChild(price);

        let productDescription = document.createElement("div");
        let description = document.createElement("p");
        productDescription.appendChild(description);

        let productColor = document.createElement("div");
        let color = document.createElement("p");
        productColor.appendChild(color);

        let productQuantity = document.createElement("div");
        let quantity = document.createElement("p");
        productQuantity.appendChild(quantity);
    }
}
getCartProducts();


//removing products from cart

function removeProducts() {
    let productRemoval = document.querySelector(".deleteItem");

    for (let i = 0; i < productRemoval.length; i++) {
        productRemoval[i].addEventListener("click", (event) => {
            event.preventDefault;

            let idRemoval = productLocalStorage[i].productId;
            let colorRemoval = productLocalStorage[i].productColor
            productLocalStorage = productLocalStorage.filter(el =>
                el.idProduct !== idRemoval || el.productColor !== colorRemoval);

            localStorage.setItem("product", JSON.stringify(productLocalStorage));

            alert("This product has been removed from the cart.");
            location.reload();
        })
    }
}
removeProducts();