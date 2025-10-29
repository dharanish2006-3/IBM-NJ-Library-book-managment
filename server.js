require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import routes
const booksRoute = require("./routes/books");
const usersRoute = require("./routes/users");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use("/api/books", booksRoute);
app.use("/api/users", usersRoute);

// PORT
const PORT = process.env.PORT || 5000;

// ✅ MongoDB Atlas connection (clean modern way)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("❌ DB connection error:", err.message));
