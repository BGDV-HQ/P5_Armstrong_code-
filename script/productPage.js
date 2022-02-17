var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");

function getArticle() {
  const displaySingleProduct = fetch('http://localhost:3000/api/products' + idProduct);

  displaySingleProduct.then(response => {     
    return response.json();
  }).then(singleProducts => {
    const singleProduct = singleProducts;

    document.getElementById('item__img').src = `${singleProduct.imageUrl}`;
    
  }).catch(error => {                 
    document.getElementById('items').innerHTML = `
        <div>
            <h2>Sorry, an error occured...(${error})</h2>
            <p>Please refresh your page or come back later while we fix the problem.</p>
        </div>`;
    console.log('Error: Fetch request failed!');
  
  });      
}


//function getPost(article) {
 // document.getElementById('item__img').src = `${singleProduct.imageUrl}`;
//}






