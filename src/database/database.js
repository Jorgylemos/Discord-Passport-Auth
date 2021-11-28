require('dotenv').config();
const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.CLIENT_MONGO,
    ({ useNewUrlParser: true, useUnifiedTopology: true }));