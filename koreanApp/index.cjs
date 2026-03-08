const express = require("express");
const path = require("path");
const fs = require("fs");
const master = require("./master.json")

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


function loadMaster(){
    return JSON.parse(fs.readFileSync(master, "utf-8"))
}

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.get("/category", (req, res) => {
    res.render("flashCard", {title: "Fruits in Korean", categories: master.categories})
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});