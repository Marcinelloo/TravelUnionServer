const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 8000;

require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

//import routes
const userRoute = require("./routes/user");
const countryRoute = require("./routes/country");
const currencyRoute = require("./routes/currency");
const offerRoute = require("./routes/offer");
const opinionRoute = require("./routes/opinion");
const reservationRoute = require("./routes/reservation");
const travelRoute = require("./routes/travel");
const cityRouter = require("./routes/city");

//use routes
app.use("/user", userRoute);
app.use("/country", countryRoute);
app.use("/currency", currencyRoute);
app.use("/offer", offerRoute);
app.use("/opinion", opinionRoute);
app.use("/reservation", reservationRoute);
app.use("/travel", travelRoute);
app.use("/city", cityRouter);

app.get("/", (req, res) => {
  res.send("You are connected to the server!");
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to db");
});

app.listen(PORT, () => {
  console.log("listening on http://localhost:8000");
});
