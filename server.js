const express = require("express");
const venom = require("venom-bot");
const {setupVenom} = require('./utils/venomClient');
const venomRoutes = require("./routes/venomRoutes");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/venom/", venomRoutes);


const setupVenomAndStartServer = async () => {
  try {
    setupVenom();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

  } catch (error) {
    console.error(error);
  }
};

setupVenomAndStartServer();
