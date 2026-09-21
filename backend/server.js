const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json({
    project: "FitPath",
    message: "FitPath Backend API - Sample Code"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "FitPath API is running"
  });
});

app.listen(PORT, () => {
  console.log(`FitPath server running on port ${PORT}`);
});
