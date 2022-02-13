
const displaySingleProduct = fetch('http://localhost:3000/api/products');

  displaySingleProduct.then(response => {     
    return response.json();
}).then(singleProducts => {          
    const singleProduct = singleProducts;

    document.getElementById('item__img').src = `${singleProduct.imageUrl}`;
    
function getPost(article){
    // Image insertion
    let productImg = document.createElement("img");
    document.querySelector(".item__img").appendChild(productImg);
    productImg.src = article.imageUrl;
    productImg.alt = article.altTxt;
        
         

});      
    



