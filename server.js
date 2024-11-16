const express = require('express');
const cors = require('cors');  // Add this line
const app = express();

app.use(cors());  // Enable CORS for all routes

app.get('/', (req, res) => {
    res.json({ message: 'Backend is running!' });
});

app.listen(5000, () => console.log('Server started on port 5000'));
