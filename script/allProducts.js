

  const displayAllProducts = fetch('http://localhost:3000/api/products');

  displayAllProducts.then(response => {     
    return response.json();
}).then(products => {          
    const product = products;
    let display = '';

    for (let i in products) {   //adding each camera from the response into DOM
    
      display +=
        //Here! Need a div(or divs) that reference img, name, price,id (product details), and button(?) 
      
            <article>
              <img src="${products[i].imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1"/>
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            </article>
        
    /*    `<main class="limitedWidthBlockContainer">
    <div class="limitedWidthBlock">
      <section class="item">
        <article>
          <div class="item__img">
            <img src="${products[i].imageUrl}">
          </div>
          <div class="item__content">

            <div class="item__content__titlePrice">
              <h1 id="title">${products[i].name}<!-- Nom du produit --></h1>
              <p>Prix : <span id="price">${products[i].price}<!-- 42 --></span>€</p>
            </div>

            <div class="item__content__description">
              <p class="item__content__description__title">Description:</p>
              <p id="description">${products[i].description}<!-- Dis enim malesuada risus sapien gravida nulla nisl arcu. --></p>
            </div>

            <div class="item__content__settings">
              <div class="item__content__settings__color">
                <label for="color-select">Chose your color:</label>
                <select name="color-select" id="colors">
                    <option value="">--Please, select a color</option>
                       <option value="">${products[i].colors[0]}</option>
                       <option value="">${products[i].colors[1]}</option>
                       <option value="">${products[i].colors[2]}</option>
                </select>
              </div>
              <br>
              <div class="item__content__settings__quantity">
                <label for="itemQuantity">Number of articles (1-100):</label>
                <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
              </div>
            </div>
            <br>
            <div class="item__content__addButton">
              <button id="addToCart">Add to cart</button>
            </div>

          </div>
        </article>
      </section>
    </div>
  </main>`*/
  document.getElementById('items').innerHTML = display;
  }
}).catch(error => {                     // if "REJECT" clears the content of main container and displays information for user
  document.getElementById('items').innerHTML = `
      <div>
          <!-- Here! Need a div(or divs) for errors --!>
          <h2>Sorry, an error occured...(${error})</h2>
          <p>Please refresh your page or come back later while we fix the problem.</p>
      </div>`;
  console.log('Error: Fetch request failed!');

});      
    




