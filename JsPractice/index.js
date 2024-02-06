let cart = 0;

function showQuantity() {
  console.log("The cart Quantity :" + cart);
}

function addToCart() {
  cart += 1;
  console.log("The cart Quantity :" + cart);
}

function addTwice() {
  cart += 2;
  console.log("The cart Quantity :" + cart);
}

function addThrice() {
  cart += 3;
  console.log("The cart Quantity :" + cart);
}

function substractTwice() {
  cart -= 2;
  console.log("The cart Quantity :" + cart);
}

function substractThrice() {
  cart -= 3;
  console.log("The cart Quantity :" + cart);
}

function resetCart() {
  cart = 0;
  console.log("Cart was reset");
  console.log("The cart Quantity :" + cart);
}

function removeFromCart() {
  if (cart > 0) {
    cart--;
    console.log("The cart Quantity :" + cart);
  } else {
    console.log("Cart is empty");
  }
}
function checkQuantity() {
  if (cart >= 10) {
    alert("Cart is full , dont update");
    removeFromCart();
  } else if (cart === 0) {
    alert("Not enough items in cart");
  }
}
