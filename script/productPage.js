const str = window.location.href;
const url = new URL(str);
const idProduct = url.searchParams.get("id");

// We spoke about querySelector last week (see below; lines; 6-10)
console.log(idProduct);
let article = "";

const colorPicked = document.querySelector("#colors");
const quantityPicked = document.querySelector("#quantity");

getArticle();

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

    // Modification of the title "h1
    let title = document.getElementById('title');
    title.innerHTML = article.title;

    // Modification of the price
    let price = document.getElementById('price');
    price.innerHTML = article.price;

    // Modification of the description
    let description = document.getElementById('description');
    description.innerHTML = article.description;

    // Insertion of color options

    for (let colors of article.colors) {
        let colorChoices = document.createElement("option");
        document.querySelector("#colors").append(colorChoices);
        colorChoices.value = colors;
        colorChoices.innerHTML = colors;
    }

    addToCart(article);

}

function addToCart(article) {
    const basket = document.querySelector("#addToCart");
    let colorChoice = colorPicked.value;
    let quantityChoice = quantityPicked.value;

    //Listen to the basket with 2 non-zero color conditions and quantity between 1 and 100
    basket.addEventListener("click", (event) => { 
        if (quantityChoice.value > 0 && quantityChoice.value < 100) {
        }
    })
    //Retrieving the options of the item to add to the cart
    let retrieveOptions = {
        idProduct: idProduct,
        image: article.imageUrl,
        name: article.title,
        price: article.price,
        description: article.description,
        colorOption: colorChoice,
        quantityOption: quantityChoice,
    }

};

    //Initialisation of the local storage
    let productLocalStorage;

    //window pop-up
    const popupConfirmation =() =>{
        if (window.confirm (`Your order of ${quantityChoice}  ${article.name}  ${colorChoice} is added to the cart
To view your cart, click OK`)) {
            window.location.href ="cart.html";
        }
    }
    









