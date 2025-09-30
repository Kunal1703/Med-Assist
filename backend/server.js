const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const apiRoutes = require("./routes/api");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Use API routes
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("MedAssist Backend Running ✅");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
