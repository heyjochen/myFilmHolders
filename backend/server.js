const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();

app.use("/api/projects", require("./routes/projectRoutes"));

app.listen(port, () => console.log(`We runnin on port ${port}`));
