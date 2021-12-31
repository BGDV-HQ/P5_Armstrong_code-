  import fetch from 'node-fetch';

  fetch('http://localhost:3000/api/products')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("response is not ok");
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
  const productColors = data.colors[0];
  const productImage = data.imageUrl;
  //const productId = data.id[0];
  //const productName = data.name[0];
 // const productPrice = data.price[0];
  //const productDescription = data.description[0];
 // const productAlt = data.altTxt[0];

  const productDiv = document.getElementById("items");

  const color = productColors.colors;
  const heading = document.createElement("h1");
  heading.innerHTML = color;
  productDiv.appendChild(heading);

  const image = document.createElement("img");
  image.src = productImage;
  document.body.style.backgroundImage = "url('" + productImage + "')";
}


