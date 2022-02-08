
const displaySingleProduct = fetch('http://localhost:3000/api/products');

  displaySingleProduct.then(response => {     
    return response.json();
}).then(products => {          
    const singleProduct = singleProducts;
    let singleDisplay = '';

    for (let i in products) {   //adding each camera from the response into DOM
    
      display +=
      document.getElementById('item__img').src = `${products[i].imageUrl}`;
        
         
  document.getElementById('items').innerHTML = singleDisplay;
  }
}).catch(error => {                     // if "REJECT" clears the content of main container and displays information for user
  document.getElementById('items').innerHTML = `
      <div>
          <h2>Sorry, an error occured...(${error})</h2>
          <p>Please refresh your page or come back later while we fix the problem.</p>
      </div>`;
  console.log('Error: Fetch request failed!');

});      
    



