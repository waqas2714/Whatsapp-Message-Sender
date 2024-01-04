const express = require('express');
const router = express.Router();
const {sendMessage} = require('../controllers/venomController');

// Define routes and their corresponding controller functions

// Route to send a message
router.post('/send-message', sendMessage);
router.get('/', (req, res)=>{res.send("I am Alive.")});

module.exports = router;


