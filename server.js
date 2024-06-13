const express = require("express");
// .env faylni chaqirish
const dotenv = require("dotenv").config();

const app = express();
// .env fayldagi malumotlarni olish
const port = process.env.PORT || 5000

app.get("/api/contacts", (req, res) => {
    // res.end("Get all contacts") // matn formatida qaytarishe

    // JSON qiymat qaytarish
    res.status(200).json({message: "Get all contacts"})
})

app.listen(port, () => {
    console.log(`Server running Port on ${port}`);
})