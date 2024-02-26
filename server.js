require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const todoTaskRouter = require("./routers/todoTaskRouter");
const userRouter = require("./routers/userRouter");
// Express app
const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Running!"));

const port = process.env.PORT || 3001;
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);

app.use("/api/todoTasks", todoTaskRouter);
app.use("/api/users", userRouter);