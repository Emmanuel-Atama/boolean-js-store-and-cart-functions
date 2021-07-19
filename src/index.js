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

// Example of what it should look like:
// const expensiveProducts = filterExpensiveProducts(store.products);

// console.log("expensiveProducts: ", expensiveProducts);

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

//     const isDeliveryIncoming = product.stock.incomingDelivery;

//     if (isDeliveryIncoming) {
//       productsThatNeedToBeReceived.push(product);
//     }
//   }
// }
// const productsThatNeedToBeReceived = filterproductsthatNeedToBeReceived(
//   products
// );
// console.log("Delivery Products: ", productsThatNeedToBeReceived);

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

// const productsThatNeedToBeOrdered = function();

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "tablet"

// const tablets = function();

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "computer"

// const computers = function();

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iMac"

// const iMac = function();

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPhone 12"

// const iPhone12 = function();

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPad Mini"

// const iPadMini = function();

// ----- CHALLENGE -----

// Write a function here...
// array as a parameter
// - returns an array of unique product types
//    => ["mobile", "computer", "tablet"]

// const productTypes = function();

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

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the total of the items in the cart

// const totalPrice = function()

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the quantity of the items in the cart

// const quantityOfItemsInCart = function()

// ----- Section ----- **

// Write a function here...
// - that takes an object as a parameter
// - returns a string of the information about a product in the cart
//      => "iPhone 12 | Mobile - £1400 x 2 || £2800"

// const recieptRow = function()

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a string with the variosu rows on the reciept
// TIP: Re-use the above function for "receiptRow"

// const receiptMessage = function()

// console.log("receiptMessage: ", receiptMessage)
