
const displaySingleProduct = fetch('http://localhost:3000/api/products');

  displaySingleProduct.then(response => {     
    return response.json();
}).then(singleProducts => {          
    const singleProduct = singleProducts;

    document.getElementById('item__img').src = `${singleProduct.imageUrl}`;
        
         

});      
    



