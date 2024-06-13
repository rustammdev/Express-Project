const express = require('express');
const connectDb = require('./config/db-connection');
const dotenv = require('dotenv').config(); // .env faylni chaqirish
const { errorHandler } = require('./middleware/error-handler');

connectDb();
const app = express();
// .env fayldagi malumotlarni olish
const port = process.env.PORT || 5000;

// POST metodidan qaytgan qiymat undefind bo'lmasligi uchun
app.use(express.json());

app.use('/api/contacts', require('./routes/contact-routes'));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running Port on ${port}`);
});
