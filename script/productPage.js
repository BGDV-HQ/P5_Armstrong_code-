var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");

// We spoke about querySelector last week (see below; lines; 6-10)
console.log (idProduct);
let article = "";

const colorPicked = document. querySelector ("#colors");
const quantityPicked = document.querySelector ("#quantity");

getArticle ();

// Retrieve the articles from the API

function getArticle() {
   const displaySingleProduct = fetch('http://localhost:3000/api/products' + idProduct)
  .then ((res) => {
      return res.json ();
  })

  displaySingleProduct.then(response => {     
    return response.json();
  }).then(singleProducts => {
    const singleProduct = singleProducts;

    getPost(article());
    
  }).catch(error => {                 
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
    const image = document.getElementById('item__img').src = `${singleProduct.imageUrl}`;

    // Modification of the title "h1
    const title = document.createElement('h1');

    // Modification of the price
    const price = document.getElementById('price').textContent = `${singleProduct.price}`;
    // Modification of the description
    const description = document.getElementById('description').textContent = `${singleProduct.description}`;

    // Insertion of color options

}


//Shopping cart management
function addToCart(article) {
    const btn_sendBasket = document.querySelector("#addToCart");

    //Listen to the basket with 2 non-zero color conditions and quantity between 1 and 100

    //Recovery of the color choice
                
    //Recovery of the choice of quantity

    //Retrieving the options of the item to add to the cart

    };

    //Initialisation of the local storage
   /* let productLocalStorage =

    //window pop-up
    const popupConfirmation =() =>{
        if(
        }
    }
    
    
    //Import into local storage
    //If the basket already contains at least 1 item
    if (productLocalStorage) {
    const resultFind = 
          
        //If the ordered product is already in the basket
        if (resultFind) {
            let newQuantity =
                
        //If the ordered product is not in the basket
        } else {
            productLocalStorage.push(
        }
    //If the basket is empty
    } else {
        productLocalStorage =[];
        productLocalStorage.push(optionsProduct);
        localStorage.setItem(
    }}
    });
}


//function getPost(article) {
 // document.getElementById('item__img').src = `${singleProduct.imageUrl}`;
//}*/





