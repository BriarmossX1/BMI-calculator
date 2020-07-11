//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res) {

    var height = req.body.height;
    var weight = req.body.weight;

    var bmi = Math.round((weight * 703) / Math.pow(height, 2));

    res.send("Your BMI is " + bmi + ".");
});

/*
app.listen(3000, function() {
    console.log("The Server is running on port 3000.");
});
*/