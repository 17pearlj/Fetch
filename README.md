# Fetch

Receipt processor challenge.

This is an express application with a front end in Jade.


To run:
1. Download npm
2. Cd to server
3. Run npm install
4. Run npm start
5. Go to http://localhost:3000/


Valid routes:
- '/': Home
- '/receipts': List of created (and preloaded) receipts
- '/receipts/processor': Form to submit new receipts
- '/:receiptId/points': Display of points of id.


Repository walkthrough:
- App.js: Express setup
- Routes: 
  - Index.js: Router get home page
  - Receipts: Router with all other REST functions
  - Receipt Processor: Receipt processor calculation
  - Receipt Processor Testing: Receipt processor testing file
- Views: 
  - Jade frontend files 
 
 
 Preview
 
 
<img width="300" alt="Captura de Pantalla 2023-01-10 a la(s) 10 24 45 p  m" src="https://user-images.githubusercontent.com/18289791/211710752-dab99801-52c2-4263-971e-e40bd250c343.png">
