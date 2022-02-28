const str = window.location.href;
const url = new URL(str);
const idProduct = url.searchParams.get("id");

// We spoke about querySelector last week (see below; lines; 6-10)
console.log(idProduct);
let article = "";

const colorPicked = document.querySelector("#colors");
const quantityPicked = document.querySelector("#quantity");

getArticle ();

// Retrieve the articles from the API

function getArticle() {
   const displaySingleProduct = fetch('http://localhost:3000/api/products/' + idProduct)
  .then ((res) => {
      return res.json ();
  })

  displaySingleProduct.then(async function(products) {
      article = await products;     

      if (article) {
        getPost(article);
    }

}).catch((error) => {                 
    document.getElementById('items').innerHTML = `
        <div>
            <h2>Sorry, an error occured...(${error})</h2>
            <p>Please refresh your page or come back later while we fix the problem.</p>
        </div>`;
    console.log('Error: Fetch request failed!');
  
  });  
}

//STEPS REQUIRED
// Breakdown of the API data in the DOM



function getPost(article){
    // Image insertion
    let image = document.createElement("img");
    document.querySelector('.item__img').appendChild(image);
    image.src = article.imgUrl;
    image.alt = article.altTxt;

    // Modification of the title "h1
    let title = document.getElementById('title');
    title.innerHTML = article.name;

    // Modification of the price
    let price = document.getElementById('price');
    price.innerHTML = article.price;

    // Modification of the description
    let description = document.getElementById('description');
    description.innerHTML = article.description;

    // Insertion of color options

    for (let colors of article.colors) {
        let colors = document.createElement("option");
        document.querySelector("#colors").append(colors);
        colors.value = colors;
        colors.innerHTML = colors;
    }

}









