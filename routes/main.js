// Create a new router
const express = require("express");
const router = express.Router();
const path = require("path");

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!"));

router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));
router.get('/contact', (req, res) => res.send('<h1>aisha.bhudye@gmail.com</h1>'))//this takes you to the contact page
router.get("/date", (req, res) => {
	var date = new Date(); //get the date and time currently 
	res.send("<h1>Current Date and Time:</h1><p>" + date + "</p>");
})
router.get('/Ronald', (req, res) => res.send('<h1>Welcome Ronald</h1>'))//Ronald 
router.get('/Jemima', (req, res) => res.send('<h1>Welcome Jemima</h1>'))//Jemima 
// Route with chained handlers using next()
router.get("/chain", (req, res, next) => {
	req.message = "This is a chain";
	next(); // move on to the next handler
},
	(req, res) => {
		res.send("<h1>Chaining</h1><p>" + req.message + "</p>");
	}
);

router.get("/file", (req, res) => {
	// __dirname = current directory (routes folder)
	//https://nodejs.org/docs/latest/api/modules.html#__dirname
	res.sendFile(path.join(__dirname, "..", "a.html"));
});


// Export the router object so index.js can access it
module.exports = router;
