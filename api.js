// Implement a simple RESTful API using Node.js and Express

// Example code:
const express = require('express');
const app = express();

// Define routes for CRUD operations
app.get('/api/resource', (req, res) => {
  // Handle GET request for resource
  // ...
});

app.post('/api/resource', (req, res) => {
  // Handle POST request for resource creation
  // ...
});

// Define more routes for other CRUD operations
// ...

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
