const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets for heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes
app.use(routes);

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/safehamlet", { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}`);
});
