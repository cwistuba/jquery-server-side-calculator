const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

const calculation = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("server/public"));

app.get("/calculation", (req, res) => {
  res.send(calculation);
});

app.post("/calculations", (req, res) => {
  const calculationItem = req.body;

  calculation.push(calculationItem);
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
