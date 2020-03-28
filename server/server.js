const express = require("express");
const bodyParser = require("body-parser");
const numberHistory = require("./modules/numberhistory");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("server/public"));

app.get("/numberhistory", (req, res) => {
  res.send(numberHistory);
});

app.post("/numberhistory", (req, res) => {
  const newItem = req.body;

  numberHistory.push(newItem);
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
