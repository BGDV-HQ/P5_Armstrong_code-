  import fetch from 'node-fetch';

  fetch('http://localhost:3000/api/products')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error("response is not ok");
      }
    })
    .then(function (data) {
      console.log(data);
      displayAllProducts(data);
    })
    .catch((error) => {
      console.error("FETCH ERROR:", error);
    });

function displayAllProducts(data) {
  const productColors = data.colors;
  const productImage = data.imageUrl;
  //const productId = data.id[0];
  //const productName = data.name[0];
 // const productPrice = data.price[0];
  //const productDescription = data.description[0];
 // const productAlt = data.altTxt[0];

  const productDiv = document.getElementById("items");

  const color = productColors.color;
  const heading = document.createElement("h1");
  heading.innerHTML = color;
  productDiv.appendChild(heading);

  const image = document.createElement("img");
  image.src = productImage;
  document.body.style.backgroundImage = "url('" + productImage + "')";
}

displayAllProducts();

