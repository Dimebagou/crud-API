const express = require("express");
const PORT = 8080;
const app = express();
const router = require("./router");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);


app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});