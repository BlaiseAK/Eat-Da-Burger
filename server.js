// Required npm files and port set up
var express = require("express");

var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 6969;

// Serve static content for the app from the public directory in the application directory
app.use(express.static("public"));

// Parse application/urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Parse application/json
app.use(bodyParser.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/plants-controller.js");

app.use(routes);

// Start server to begin listening to client requests
app.listen(PORT, function() {
    console.log("Server listening on: http//localhost:" + PORT);
});