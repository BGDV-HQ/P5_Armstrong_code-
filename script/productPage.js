
const displaySingleProduct = fetch('http://localhost:3000/api/products');

  displaySingleProduct.then(response => {     
    return response.json();
}).then(products => {          
    const singleProduct = singleProducts;

    document.getElementById('item__img').src = `${products.imageUrl}`;
        
         

});      
    



