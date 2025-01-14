const express = require("express");
const path = require("path");

const app = express();

// Set the port dynamically using the PORT environment variable or default to 80
const port = process.env.PORT || 80;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
