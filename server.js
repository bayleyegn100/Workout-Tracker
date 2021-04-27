// imported modules
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3003;
const routes = require("./routes");
const app = express();
// middle wears
app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);
// connecting to mongoDB

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
// listen the connections on the port
app.listen(PORT, () => {
    console.log(`APP runing on port ${PORT}!`);
});