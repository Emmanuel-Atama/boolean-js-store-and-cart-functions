    const store = {
  location: "London",
  products: [
    {
      name: "iPhone 6S",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 450
      },
      price: 600
    },
    {
      name: "iPhone 10",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 20
      },
      price: 1000
    },
    {
      name: "iPhone 12",
      type: "mobile",
      stock: {
        incomingDelivery: true,
        quantity: 0
      },
      price: 1400
    },
    {
      name: "iPad Pro",
      type: "tablet",
      stock: {
        incomingDelivery: true,
        quantity: 100
      },
      price: 600
    },
    {
      name: "iPad mini",
      type: "tablet",
      stock: {
        incomingDelivery: false,
        quantity: 300
      },
      price: 600
    },
    {
      name: "MacBook Pro",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 80
      },
      price: 2400
    },
    {
      name: "MacBook Air",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 200
      },
      price: 1800
    },
    {
      name: "iMac",
      type: "computer",
      stock: {
        incomingDelivery: true,
        quantity: 15
      },
      price: 2300
    }
  ]
};

// Each section needs it's own for loop
// DO NOT change any of the code
//
// For sections with "A list of..." the output should be an array full of objects
// Output:
// => [{...}, {...}, {...}]
//
// For sections with "An object..." the output should be an object
// Output:
// => {...}
const products = store.products;
// STORE EXERCISES

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost more than £1000

function filterExpensiveProducts(products, targetPrice) {
  const expensiveProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const price = product.price;

    if (price >= targetPrice) {
      expensiveProducts.push(product);
    }
  }
  return expensiveProducts;
}
const expensiveProducts = filterExpensiveProducts(products, 1000);
console.log("Exepensive Products Over £1000: ", expensiveProducts);

const expensiveProductsOver2000 = filterExpensiveProducts(products, 2000);
console.log("Exepensive Products Over £2000: ", expensiveProductsOver2000);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost less than £1000
function filterCheaperProducts(products, targetPrice) {
  const cheaperProducts = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const price = product.price;
    if (price <= targetPrice) {
      cheaperProducts.push(product);
    }
  }
  return cheaperProducts;
}
const cheaperProductsUnder1000 = filterCheaperProducts(products, 1000);
console.log("Cheaper Products Under £1000: ", cheaperProductsUnder1000);

// ----- Section ----- **

// Write a function here...
function filterproductsthatNeedToBeReceived(products) {
  //   // - that takes an array as a parameter
  //   // - returns an array of products that have an incoming delivery
  const incomingDeliveryProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const incomingDelivery = product.stock.incomingDelivery;

    if (incomingDelivery) {
      incomingDeliveryProducts.push(product);
    }
  }
  return incomingDeliveryProducts;
}
const incomingDeliveryProducts = filterproductsthatNeedToBeReceived(products);
console.log("Incoming Delivery: ", incomingDeliveryProducts);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that are out of stock
function filterOutOfStockProducts(products) {
  const outOfStockProducts = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const stock = product.stock.quantity;
    if (stock === 0) {
      outOfStockProducts.push(product);
    }
  }
  return outOfStockProducts;
}
const outOfStockProducts = filterOutOfStockProducts(products);
console.log("Out of stock Products: ", outOfStockProducts);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have a quantity that is less than 100 and have no incoming delivery

function filterProductsThatNeedsToBeOrdered(products) {
  const productsThatNeedToBeOrdered = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const noIncomingDelivery = product.stock.incomingDelivery;

    const quantityLessThan100 = product.stock.quantity;
    if (noIncomingDelivery === false && quantityLessThan100 < 100) {
      productsThatNeedToBeOrdered.push(product);
    }
  }
  return productsThatNeedToBeOrdered;
}
const productsThatNeedToBeOrdered = filterProductsThatNeedsToBeOrdered(
  products
);
console.log("Quantity Less Than 100: ", productsThatNeedToBeOrdered);


// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "tablet"

function filterTabletProductsType(products) {
  const tablets = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productType = product.type;
    if (productType === "tablet") {
      tablets.push(product);
    }
  }
  return tablets;
}
const tablets = filterTabletProductsType(products);
console.log("Tablets Available: ", tablets);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "computer"

function filterComputersProductsType(products) {
  const computers = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productType = product.type;
    if (productType === "computer") {
      computers.push(product);
    }
  }
  return computers;
}
const computers = filterComputersProductsType(products);
console.log("Computers Available: ", computers);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iMac"

function filterImac(products) {
  const imac = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const name = product.name;
    if (name === "iMac") {
      imac.push(product);
    }
  }
  return imac;
}
const imac = filterImac(products);
console.log("Object Representing iMac: ", imac);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPhone 12"

function filterIphone12(products) {
  const iphone12 = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const name = product.name;
    if (name === "iPhone 12") {
      iphone12.push(product);
    }
  }
  return iphone12;
}
const iphone12 = filterIphone12(products);
console.log("Object Representing iPhone12: ", iphone12);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPad Mini"

function filterIpadMini(products) {
  const ipadMini = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const name = product.name;
    if (name === "iPad mini") {
      ipadMini.push(product);
    }
  }
  return ipadMini;
}
const ipadMini = filterIpadMini(products);
console.log("Object Representing ipadMini: ", ipadMini);

// ----- CHALLENGE -----

// Write a function here...
// array as a parameter
// - returns an array of unique product types
//    => ["mobile", "computer", "tablet"]

function filterUniqueProductType(products) {
  const productTypes = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const mobileType = product.type;
    const computerType = product.type;
    const tabletType = product.type;
    if (
      mobileType === "mobile" &&
      computerType === "computer" &&
      tabletType === "computer"
    ) {
      productTypes.push(product);
    }
  }
  return productTypes;
}
const productTypes = filterUniqueProductType(products);
console.log("Unique Products Type: ", productTypes);

// CART EXERCISES

const cart = [
  {
    product: {
      name: "iPhone 12",
      type: "mobile",
      price: 1400
    },
    quantity: 4
  },
  {
    product: {
      name: "iPad mini",
      type: "tablet",
      price: 600
    },
    quantity: 2
  },
  {
    product: {
      name: "MacBook Air",
      type: "computer",
      price: 1800
    },
    quantity: 2
  },
  {
    product: {
      name: "iMac",
      type: "computer",
      price: 2300
    },
    quantity: 2
  }
];
console.log(cart)
// ----- Section ----- **
// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the total of the items in the cart
function calculateTotalPrice(cart) {
  let sumTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const quantity = item.quantity;
    console.log("Quantity of Items: ", quantity);
    const price = item.product.price;
    console.log("Price of Items: ", price);
    sumTotal = sumTotal + price * quantity;
  }
  return sumTotal;
}
const totalPrice = calculateTotalPrice(cart);
console.log("Total Price of Items in The Cart: ", totalPrice);
// ----- Section ----- **
// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the quantity of the items in the cart
function calculateQuantityInCart(cart) {
  let total = 0;
 
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const quantity = item.quantity;
    // console.log("Available  Quantity: ", quantity);

    total = total + quantity;
  }
  return total
  console.log("Total : ", total);
}
const totalQuantityInCart = calculateQuantityInCart(cart)
console.log("Total Quantity In Cart: ", totalQuantityInCart)

// ----- Section ----- **
// Write a function here...
// - that takes an object as a parameter
// - returns a string of the information about a product in the cart
//      => "iPhone 12 | Mobile - £1400 x 2 || £2800"
function productInfoInTheCart(item) {
  const quantity = item.quantity;
  const name = item.product.name;
  const type = item.product.type;
  const price = item.product.price;
  const pricePerItem = price * quantity;
  // console.log("Price Per Item: ", pricePerItem)
  const row = `${name} |  ${type} - ${price} * ${quantity} ||  ${pricePerItem}\n`;
  // console.log("Showing Row: ", row);
  return row;
}
const receiptRow = productInfoInTheCart(cart[0]);
console.log("Receipt Row: ", receiptRow);
// const recieptRow = function()
// ----- Section ----- **
// Write a function here...
// - that takes an array as a parameter
// - returns a string with the various rows on the reciept
// TIP: Re-use the above function for "receiptRow"
function buildReceiptMessage(cart) {

  let message = "Apple Store Receipt\n\n";

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const row = productInfoInTheCart(item);
    message += row + "\n";
  }
  message +="\n";

  const quantityOfItems = calculateQuantityInCart(cart);
  const quantiyOfItemsString = `Number of Items ${quantityOfItems}\n`;

  message +=quantiyOfItemsString;

  const total = calculateTotalPrice(cart);
  const totalString = `Total || £${total.toFixed(2)}\n`;

  message += totalString;

  return message;
}
const receiptMessage = buildReceiptMessage(cart)

console.log("receiptMessage: ", receiptMessage)
