var express = require('express');
var router = express.Router();

// Receipt Processor: helper functions below
function process(receipt) {
  
  let points = 0;

  points += retailerPoints(receipt.retailer)

  if (receipt.total % 1.00 == 0) { points += 50; }
  if (receipt.total % 0.25 == 0) { points += 25; }

  points += itemPoints(receipt.items)

  points += datePoints(receipt.purchaseDate);
  points += timePoints(receipt.purchaseTime);

  return points;
  
}


function retailerPoints(retailer) {
  const alphanumeric = /^[\p{L}\p{N}]*$/u;
  let points = 0;
  for (let i of retailer) {
    if (i.match(alphanumeric)) {
      points++;
    }
  }
  return points;
}

function itemPoints(items) {
  let points = 5*Math.floor((items.length) /2.0);
  for (let item of items) {
    let len = item.shortDescription.trim().length;
      if (len % 3 == 0 && len != 0) {
      points += Math.ceil(item.price * 0.2);
     }
  }
  return points;
}

function datePoints(purchaseDate) {
  let days = purchaseDate.substring(purchaseDate.length - 2)
  if (parseInt(days) % 2 != 0) { return 6; }
  return 0;
}

function timePoints(purchaseTime) {
  let hour = parseInt(purchaseTime.substring(0, 2));
  let min = parseInt(purchaseTime.substring(3));
  if ((hour == 14 && min != 0) || (hour > 14 && hour < 16)) { return 10; } 
  return 0;

}



const receipts = [{
  id: 1,
  retailer: "Target",
  purchaseDate: "2022-01-01",
  purchaseTime: "14:01",
  items: [
      {
          shortDescription: "Mountain Dew 12PK",
          price: "6.49"
        },{
          shortDescription: "Emils Cheese Pizza",
          price: "12.25"
        },{
          shortDescription: "Knorr Creamy Chicken",
          price: "1.26"
        },{
          shortDescription: "Doritos Nacho Cheese",
          price: "3.35"
        },{
          shortDescription: "   Klarbrunn 12-PK 12 FL OZ  ",
          price: "12.00"
      }
  ],
  total: "35.25"
  
  }];



module.exports.process = process;
module.exports.receipts = receipts;