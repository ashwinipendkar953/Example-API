const mongoose = require("mongoose");

const dbURI = "mongodb://127.0.0.1:27017/examples";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connection successful."))
  .catch((err) => console.error(err));
