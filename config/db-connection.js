const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.CONNECTION_STRING
    );

    // Ulanishni tekshirish
    console.log(
        "databes connection.\n",
        "host: " + connect.connection.host + "\n",
        "db-name: " + connect.connection.name
    )
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
};


module.exports = connectDb;