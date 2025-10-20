const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Node App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            margin-top: 100px;
          }
          h1 {
            color: #333;
          }
          p {
            color: #666;
          }
        </style>
      </head>
      <body>
        <h1>Hello from Node.js 🚀</h1>
        <p>Welcome to your Sample node.js web page!</p>
      </body>
    </html>
  `);
});

module.exports = router;
