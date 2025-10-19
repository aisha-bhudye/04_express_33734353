// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));
router.get('/contact', (req, res) => res.send ('<h1>aisha.bhudye@gmail.com</h1>'))//this takes you to the contact page
router.get('/date', (req, res) => res.send ('<h1>19/10/2025</h1>'))//this takes you to the date page
router.get('/Ronald', (req, res) => res.send ('<h1>Welcome Ronald</h1>'))//Ronald 
router.get('/Jemima', (req, res) => res.send ('<h1>Welcome Jemima</h1>'))//Jemima 

// Export the router object so index.js can access it
module.exports = router;
