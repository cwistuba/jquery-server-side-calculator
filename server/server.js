const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

const calculation = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/calculation", (req, res) => {
  res.send(calculation);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
