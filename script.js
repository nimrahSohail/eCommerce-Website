const priceSign = "$";

const allProducts = [
  {
    id: 0,
    title: "Men Tshirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "1.jpg",
    qty: 0,
  },
  {
    id: 1,
    title: "Shoes Product 1",
    price: 200,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "2.jpg",
    qty: 0,
  },
  {
    id: 2,
    title: "Women handbag",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "3.jpg",
    qty: 0,
  },
  {
    id: 3,
    title: "Shoes Product 2",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "4.jpg",
    qty: 0,
  },
  {
    id: 4,
    title: "Cap",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "5.jpg",
    qty: 0,
  },
  {
    id: 5,
    title: "Women Product 3",
    price: 400,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "6.jpg",
    qty: 0,
  },
  {
    id: 6,
    title: "Shoes Product 3",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "7.jpg",
    qty: 0,
  },
  {
    id: 7,
    title: "Jacket",
    price: 200,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "8.jpg",
    qty: 0,
  },
  {
    id: 8,
    title: "Bag",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "9.jpg",
    qty: 0,
  },
  {
    id: 9,
    title: "Wrist Watch",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "10.jpg",
    qty: 0,
  },
  {
    id: 10,
    title: "Hat",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "11.jpg",
    qty: 0,
  },
  {
    id: 11,
    title: "shoes",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "12.jpg",
    qty: 0,
  },
  {
    id: 12,
    title: "Wrist Watch",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "13.jpg",
    qty: 0,
  },
  {
    id: 13,
    title: "Shoes",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "14.jpg",
    qty: 0,
  },
  {
    id: 14,
    title: "Cap",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "15.jpg",
    qty: 0,
  },
  {
    id: 15,
    title: "Tshirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "16.jpg",
    qty: 0,
  },
  {
    id: 16,
    title: "Colorful Tshirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "17.jpg",
    qty: 0,
  },
  {
    id: 17,
    title: "Hat",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "18.jpg",
    qty: 0,
  },
  {
    id: 18,
    title: "Jacket and cap",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "19.jpg",
    qty: 0,
  },
  {
    id: 19,
    title: "Trouser",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "20.jpg",
    qty: 0,
  },
];

// Display all products on homepage
function displayProducts() {
  let innerDisplayProduct = "";
  allProducts.forEach(function (element, index) {
    innerDisplayProduct += `  
    
      <div  class="product text-center col-lg-3 col-md-4 col-12">
            <img src="./shop/${element.url}" alt=${element.title} class="img-fluid mb-3"/>

        <h5 class="p-name">${element.title}</h5>
        <h4 class="p-price">${priceSign} ${element.price}</h4>

        <button class="buy-btn"
        id=${index} onclick="addToCart('${element.id}','${element.title}','${element.price}','${element.desc}','${element.url}','${element.qty}','${element}')">

        ADD TO CART

        </button>
      </div>
       `;
  });
//   innerDisplayProduct += `   

//                   <div class="shop-card">
//                     <div class="imgBx">
//                         <img src="./shop/${element.url}" alt=${element.title} />

//                     </div>
//                     <div class="content">
//                         <div class="productName">
//                             <h3>${element.title}
//                             </h3>
//                         </div>
//                         <div class="price-rating">
//                             <h2>${priceSign} ${element.price}</h2>
//                         </div>
//                         <div class="rating">
//                             <button type="button" class="btn btn-dark cart-add" 
//                             id=${index}
                            
//             onclick="addToCart('${element.id}','${element.title}','${element.price}','${element.desc}','${element.url}','${element.qty}','${element}')"
//                             >
//                                 Add to cart
//                             </button>

//                         </div>
//                     </div>
//                 </div>
//                   `;
//   });
  let parentProductsDiv = document.getElementById("parent-product-div");
  if (parentProductsDiv != null) {
    parentProductsDiv.innerHTML = innerDisplayProduct;
  }
}

// // Display cart qty in menu bar icon (cart icon)
function onLoadCartQuantity() {
  let getCartQ = localStorage.getItem("cartQ");
  getCartQ = parseInt(getCartQ);
  if (getCartQ) {
    document.querySelector(".cart-menu span").textContent = getCartQ;
  }else {
    document.querySelector(".cart-menu span").textContent = 0;
  }
}

// // Add product to cart
function addToCart(id, title, price, desc, url, qty) {
  let getCartQ = localStorage.getItem("cartQ");
  getCartQ = parseInt(getCartQ);
  if (getCartQ) {
    localStorage.setItem("cartQ", getCartQ + 1);
    document.querySelector(".cart-menu span").textContent = getCartQ + 1;
  } else {
    localStorage.setItem("cartQ", 1);
  }

  let product = {
    id: parseInt(id),
    title,
    price: parseInt(price),
    desc,
    url,
    qty: parseInt(qty),
  };

  setItemsInCart(product);
}

// // Add item to localstorage without repetition
function setItemsInCart(product) {
  let getProductsInCart = localStorage.getItem("setProductsInCart");
  getProductsInCart = JSON.parse(getProductsInCart);
  if (getProductsInCart == undefined || getProductsInCart == null) {
    product.qty += 1;
    getProductsInCart = [product];
  } else {
    let isInCart = getProductsInCart.find(
      (element) => element.id === product.id
    );
    console.log("isInCart", isInCart);
    if (isInCart == undefined) {
      product.qty += 1;
      getProductsInCart = [...getProductsInCart, product];
    } else {
      let indexOfProductInCart = getProductsInCart.indexOf(isInCart);
      console.log("indexOfProductInCart", indexOfProductInCart);
      getProductsInCart[indexOfProductInCart].qty += 1;
      getProductsInCart[indexOfProductInCart].price +=
        allProducts[isInCart.id].price;
    }
  }
  localStorage.setItem("setProductsInCart", JSON.stringify(getProductsInCart));
  window.location.reload();
}

// // Remove or decrease the cart qty product to cart
function removeFromCart(id, title, price, desc, url, qty) {
  let getCartQ = localStorage.getItem("cartQ");
  getCartQ = parseInt(getCartQ);
  if (getCartQ) {
    localStorage.setItem("cartQ", getCartQ - 1);
    document.querySelector(".cart-menu span").textContent = getCartQ - 1;
  } else {
    localStorage.setItem("cartQ", 0);
  }

  let product = {
    id: parseInt(id),
    title,
    price: parseInt(price),
    desc,
    url,
    qty: parseInt(qty),
  };

  decreaseQtyOfProductInCartPage(product);
}

// // Decrease the qty of product Cart page
function decreaseQtyOfProductInCartPage(product) {
  let getProductsInCart = localStorage.getItem("setProductsInCart");
  getProductsInCart = JSON.parse(getProductsInCart);
  if (getProductsInCart != undefined || getProductsInCart != null) {
    let isInCart = getProductsInCart.find(
      (element) => element.id === product.id
    );
    let indexOfProductInCart = getProductsInCart.indexOf(isInCart);
    if (getProductsInCart[indexOfProductInCart].qty > 1) {
      getProductsInCart[indexOfProductInCart].qty -= 1;
      console.log("product.id", product.id);
      getProductsInCart[indexOfProductInCart].price -=
        allProducts[product.id].price;
    } else {
      alert("Prodcut qty can't be less than zero");
    }
  }

  localStorage.setItem("setProductsInCart", JSON.stringify(getProductsInCart));
  window.location.reload();
}

// // Delete the whole product from cart
function trashTheProdcut(id, qty) {
  let getCartQ = localStorage.getItem("cartQ");
  let getProductsInCart = localStorage.getItem("setProductsInCart");
  getProductsInCart = JSON.parse(getProductsInCart);
  let confirmation = confirm("Do you want to remove the product from cart");
  if (confirmation) {
    getProductsInCart = getProductsInCart.filter((element) => element.id != id);
    localStorage.setItem(
      "setProductsInCart",
      JSON.stringify(getProductsInCart)
    );
    localStorage.setItem("cartQ", getCartQ - parseInt(qty));
  }
  window.location.reload();
}

function getTotalPrice() {
  let getProductsInCart = localStorage.getItem("setProductsInCart");
  getProductsInCart = JSON.parse(getProductsInCart);
  let total=0
  if(getProductsInCart != null){
      if(getProductsInCart.length != 0){
          getProductsInCart.map((element)=> total+=element.price)
      }
  }
  let cartTotal=document.getElementById("cart-total")
  if(cartTotal != undefined){
    cartTotal.innerText=total;
  }
  
}
// // Display items to Cart page
function displayProductOnCartPage() {
  let getProductsInCart = localStorage.getItem("setProductsInCart");
  getProductsInCart = JSON.parse(getProductsInCart);

  let getParentContainer = document.getElementById("cart");

  let innerCartDisplayProduct = "";

  if (getProductsInCart != null) {
    if (getProductsInCart.length != 0) {
      getProductsInCart.map(function (element, index) {
        innerCartDisplayProduct += `  
        <tr>
        <td>
            <span class="remove-item" >
            <i onclick="trashTheProdcut('${element.id}','${element.qty}')" class="fa fa-trash"></i></span>
        </td>
        <td data-th="Image">
        <img src="./shop/${element.url}" alt="${element.title}">
        </td>
        <td data-th="Product">
            <h5>${element.title}</h5>
        </td>
        <td>
            <h5>${priceSign} ${element.price}</h5>
        </td>
        <td data-th="Quantity">
        
        <div class="cart-plus-minus">
            <button
              class="qtybutton" style="background-color:#f0f0f0; color:#000; padding:1px 6px;"
              onclick="removeFromCart('${element.id}','${element.title}','${element.price}','${element.desc}','${element.url}','${element.qty}')"
            >
                            -
            </button>
            <span>${element.qty}</span>
            <button
              class="qtybutton" style="background-color:#f0f0f0; color:#000; padding:1px 6px;"
              onclick="addToCart('${element.id}','${element.title}','${element.price}','${element.desc}','${element.url}','${element.qty}')"
            >
              +
            </button>
         </div>
        </td>
        <td data-th="Total" class="text-center">
        ${element.price}
        </td>
    </tr>
                                      
                      `;
      });

//       innerCartDisplayProduct += `  
//                       <tr>
//                       <td data-th="Product">
//                         <div class="row">
//                           <div class="col-sm-2 hidden-xs">
//                           <img src="./shop/${element.url}" alt=${element.title} class="img-responsive"
//                           width="100%" />
                           
//                           </div>
//                           <div class="col-sm-10">
//                             <a href="/new.js">
//                               <h6 class="nomargin">${element.title}</h6>
//                             </a>
//                           </div>
//                         </div>
//                       </td>
//                       <td data-th="Price">Price:${priceSign} ${element.price}</td>
//                       <td data-th="Quantity" >
//                         <div class="cart-plus-minus">
//                           <button
//                             class="qtybutton"
//                             onclick="removeFromCart('${element.id}','${element.title}','${element.price}','${element.desc}','${element.url}','${element.qty}')"
//                           >
//                             -
//                           </button>
//                          <span>${element.qty}</span>
//                           <button
//                             class="qtybutton"
//                             onclick="addToCart('${element.id}','${element.title}','${element.price}','${element.desc}','${element.url}','${element.qty}')"
//                           >
//                             +
//                           </button>
//                         </div>
//                       </td>
//                       <td data-th="Subtotal" class="text-center" >
//                       ${element.price}
//                       </td>
//                       <td class="actions" data-th >
//                         <button class="btn btn-danger btn-sm" onclick="trashTheProdcut('${element.id}','${element.qty}')">
//                          Trash
//                         </button>
//                       </td>
//                       </tr>
                                      
//                       `;
//       });
      let parentCartProductsDiv = document.getElementById("tbody-cart");

      if (parentCartProductsDiv != null) {
        parentCartProductsDiv.innerHTML = innerCartDisplayProduct;
      }
    } else {
      if (getParentContainer != null) {
        document.getElementById("table-cart").style.display = "none";
        getParentContainer.innerHTML += `
              <div class="container"> No product in cart </div>  `;
      }
    }
  } else {
    if (getParentContainer != null) {
      document.getElementById("table-cart").style.display = "none";
      getParentContainer.innerHTML += `
        <div class="container"> No product in cart </div>  `;
    }
  }
}

displayProductOnCartPage();
displayProducts();
onLoadCartQuantity();
getTotalPrice();


