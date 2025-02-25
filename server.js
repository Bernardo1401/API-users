require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const userRoutes = require("./src/routes/userRoutes");
app.use("/api", userRoutes);

const postRoutes = require("./src/routes/postRoutes");
app.use("/api", postRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
