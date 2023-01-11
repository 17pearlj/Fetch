var express = require('express');
var router = express.Router();
const receipts = require('./receiptProcessor').receipts;
const testingProcess = require('./receiptsProcessorTesting').testingProcess;
var process = require('./receiptProcessor').process;


/* GET receipts listing. */

router.get('/', function(req, res, next) {
  let ids = []
  for (let receipt of receipts) {
    ids.push(receipt.id);
  }
  res.render('receipts', { ids: ids });
});

/* GET process form. */

router.get('/process', function(req, res, next) {
  res.render('index', { title: 'Receipt Processor', message:'' });
});

/* Pot process form. */

router.post("/process", (req, res) => {

  if (!Object.keys(req.body).length) {
     return res.status(400).json({
       message: "Empty request object.",
     });
  }

  const { retailer, purchaseDate, purchaseTime, description, price } = req.body;
  var items = [];
  var total = 0;
  for (let i = 0; i < description.length; i++) {
    if (price[i] == undefined || description == undefined) {continue; }
    var item = {
      shortDescription: description[i],
      price: price[i]
    }
    total += parseInt(price[i]);
    items.push(item);
  }
  const newReceipt = {
     id: receipts.length + 1,
     retailer,
     purchaseDate,
     purchaseTime,
     items,
     total
  };
  try {
    console.log(newReceipt);
    receipts.push(newReceipt);
    
    const message = "Receipt saved with id " + newReceipt.id;
    res.status(201).render('index', { title: 'Receipt Processor', message: message});

  } catch (error) {
     
     res.status(500).json({
       message: error,
     });
  }})

/* Get receipt id. */

router.get('/:receiptID/points', (req, res) => {
    const id = parseInt(req.params.receiptID);
    try {
        let receipt = receipts.find((receipt) => receipt.id === id);
        const points = process(receipt)
        if (!receipt) {
            return res.status(404).json({
                message: "Receipt not found",
            });
        }
        res.status(201).render('idDisplay', { id: id, points: points, retailer: receipt.retailer,
                                              purchaseDate: receipt.purchaseDate, 
                                              purchaseTime: receipt.purchaseTime,
                                              itemCount: receipt.items.length,
                                              total: receipt.total });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve receipt",
        });
    }
  });

module.exports = router;
