

  const displayAllProducts = fetch('http://localhost:3000/api/products');

  displayAllProducts.then(response => {     
    return response.json();
}).then(products => {          
    const product = products;
    let display = '';

    for (let i in product) {   //adding each camera from the response into DOM
    
      display +=        
         `<main class="limitedWidthBlockContainer">
    <div class="limitedWidthBlock">
      <section class="item">
        <article>
          <div class="item__img">
            <img src="${product[i].imageUrl}">
          </div>
          <div class="item__content">

            <div class="item__content__titlePrice">
              <h1 id="title">${product[i].name}<!-- Nom du produit --></h1>

            </div>

            <div class="item__content__description">
              <p class="item__content__description__title">Description:</p>
              <p id="description">${product[i].description}<!-- Dis enim malesuada risus sapien gravida nulla nisl arcu. --></p>
            </div>
            <br>
            
          </div>
        </article>
      </section>
    </div>
  </main>`
  document.getElementById('items').innerHTML = display;
  }
}).catch(error => {                     // if "REJECT" clears the content of main container and displays information for user
  document.getElementById('items').innerHTML = `
      <div>
          <h2>Sorry, an error occured...(${error})</h2>
          <p>Please refresh your page or come back later while we fix the problem.</p>
      </div>`;
  console.log('Error: Fetch request failed!');

});      
    




