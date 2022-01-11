  import fetch from 'node-fetch';
  import jsdom from "jsdom";
  const JSDOM = jsdom.JSDOM;




  fetch('http://localhost:3000/api/products')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("response is not ok");
      }
    })
    .then(data => displayAllProducts(data))
    .catch((error) => console.error("FETCH ERROR:", error));



function displayAllProducts(data) {
  const productDiv = document.getElementById("items");

  const productName = data.name[0];
  const heading = document.createElement("h1");
  heading.innerHTML = productName;
  productDiv.appendChild(heading);
  
  
  //const productImage = data.imageUrl;
  //const productId = data.id[0];
 // const productPrice = data.price[0];
  //const productDescription = data.description[0];
 // const productAlt = data.altTxt[0];

}




