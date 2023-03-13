const express = require('express');

const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

// incompatibility with using 'localhost'. Used 0.0.0.0 until I can find out why
mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0/pizza-hunt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
