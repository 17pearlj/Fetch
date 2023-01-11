var process = require('./receiptProcessor').process;
var assert = require('assert')

function testProcess(){ 
    // Test title
    assert(process(Testreceipts[0]) == 6);
    // Test total mod 1.0
    assert(process(Testreceipts[1]) == 76);
    // Test total mod 0.25
    assert(process(Testreceipts[2]) == 26);
    // Testing item count on receipt
    assert(process(Testreceipts[3]) == 11);
    // Testing trimmed length of item description as multiple of 3
    assert(process(Testreceipts[4]) == 27);
    // Testing odd purchase date 1
    assert(process(Testreceipts[5]) == 7);
    // Testing odd purchase date 2
    assert(process(Testreceipts[6]) == 7);
    // Testing time 1
    assert(process(Testreceipts[7]) == 11);
    // Testing time 2
    assert(process(Testreceipts[8]) == 11);
    

}

const Testreceipts = [{
    id: 1,
    retailer: "four56",
    purchaseDate: "2022-01-02",
    purchaseTime: "14:00",
    items: [],
    total: "35.33"
    }, 
    {
      id: 2,
      retailer: "A",
      purchaseDate: "1921-22-22",
      purchaseTime: "08:01",
      items: [],
      total: "35.00"
    },
    {
        id: 3,
        retailer: "B",
        purchaseDate: "1857-07-18",
        purchaseTime: "16:00",
        items: [],
        total: "35.25"
      },
    {
        id: 4,
        retailer: "C",
        purchaseDate: "1557-09-20",
        purchaseTime: "17:00",
        items: [
            {
                shortDescription: "EEEEEEEE",
                price: "6.49"
              },{
                shortDescription: "DDDDDDD",
                price: "12.25"
              },{
                shortDescription: "CCCCC",
                price: "1.26"
              },{
                shortDescription: "BBBB",
                price: "3.35"
              },{
                shortDescription: "AA",
                price: "12.00"
            }
        ],
        total: "46.53"
      },
      {
        id: 5,
        retailer: "D",
        purchaseDate: "1357-19-20",
        purchaseTime: "17:52",
        items: [
            {
                shortDescription: "EEE",
                price: "10" // 16
              },{
                shortDescription: "DDDDDD",
                price: "30" // 14
              },{
                shortDescription: "",
                price: "200"
              },{
                shortDescription: "BBBBBBBBB",
                price: "20" // 8
              },{
                shortDescription: "AAA",
                price: "20" // 4
            }
        ],
        total: "26.57"
      },
      {
        id: 6,
        retailer: "E",
        purchaseDate: "1000-01-01",
        purchaseTime: "17:00",
        items: [],
        total: "35.33"
        },
        {
            id: 7,
            retailer: "F",
            purchaseDate: "10-01-01",
            purchaseTime: "17:00",
            items: [],
            total: "35.33"
        },
        {
            id: 8,
            retailer: "F",
            purchaseDate: "10-01-06",
            purchaseTime: "14:01",
            items: [],
            total: "35.33"
        },
        {
            id: 9,
            retailer: "F",
            purchaseDate: "1000-01-06",
            purchaseTime: "15:55",
            items: [],
            total: "35.33"
        },

];

module.exports.testingProcess = testProcess;