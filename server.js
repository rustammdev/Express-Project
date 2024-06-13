const express = require("express");
// .env faylni chaqirish
const dotenv = require("dotenv").config();

const app = express();
// .env fayldagi malumotlarni olish
const port = process.env.PORT || 5000


app.use("/api/contacts", require("./routes/contact-routes"))

app.listen(port, () => {
    console.log(`Server running Port on ${port}`);
})