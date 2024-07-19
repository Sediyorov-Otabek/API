const API__URL = "https://dummyjson.com/products";
const wrapper = document.querySelector(".wrapper");
const loading = document.querySelector(".loading");
async function fetchUser(api) {
  loading.style.display = "flex";
  let reponse = await fetch(`${api}`);
  reponse
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.style.display = "none";
    });
}
fetchUser(API__URL);
function createCard(data) {
  // console.log(data);
  data.products.forEach((products) => {
    //    console.log(products);
    let card = document.createElement("div");
    card.classList.add("card");
    console.log(card);
    card.innerHTML = `
         <div class="images">
              <img src="${products.thumbnail}" alt="">
              </div>
              
                  <h3>${products.title}</h3>
            <p class="title">${products.description}</p>
            <div class="product">
            <p>${products.price}</p>
            <p>${products.discountPercentage}</p>
            <p>${products.rating}</p>
              </div>
    
            <div class="box">
             <p>${products.brand}</p>
             <p>${products.sku}</p>
             </div>
             <div class="content">
             <p>${products.dimensions.width}</p>
             <p>${products.dimensions.height}</p>
             <p>${products.dimensions.depth}</p>
               </div>
               <div class="warran">
                   <p>${products.warrantyInformation}</p>
             <p>${products.shippingInformation}</p>
             <p>${products.availabilityStatus}</p>
               </div>
         
           
             
           
          
              </div>
             
             
             
           

        
        
            

        
          `;
    wrapper.appendChild(card);
  });
}
