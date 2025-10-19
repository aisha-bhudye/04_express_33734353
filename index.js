// Set up express
const express = require("express");
const app = express();
const port = 8000; 

// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

// Handle the routes
app.get("/", (req, res) => res.send("Hello World!")); 
app.get('/about', (req, res) => res.send ('<h1>This is about page</h1>'))//This takes you to the about page
app.get('/contact', (req, res) => res.send ('<h1>aisha.bhudye@gmail.com</h1>'))//this takes you to the contact page
app.get('/date', (req, res) => res.send ('<h1>19/10/2025</h1>'))//this takes you to the date page

// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 
