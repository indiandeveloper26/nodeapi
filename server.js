const express = require('express');
const app = express();
const PORT = 3000;

// Simple GET API
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js API!' });
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
