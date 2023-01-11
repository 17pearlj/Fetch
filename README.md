# Fetch

Receipt processor problem.
To run:
1. Download npm
2. Cd to server
3. Run npm install
4. Run npm start


Valid routes:
- '/': Home
- '/receipts': List of created (and preloaded) receipts
- '/receipts/processor': Form to submit new receipts
- '/:receiptId/points': Display of points of id.


File walkthrough:
- Routes: 
  - Index.js: home page
  - Receipts: REST functions
  - Receipt Processor: Receipt processor calculation
  - Receipt Processor Testing: Receipt processor testing
- Views: 
  - Jade frontend files 
 
