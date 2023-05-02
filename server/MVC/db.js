const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/itineraries', {useNewUrlParser: true, useUnifiedTopology: true});

const itSchemas = mongoose.Schema({
  eTitle: String,
  eStart: String,
  eEnd: String
  eStartLocation: {
    a1: String,
    a2: String,
    city: String,
    state: String,
    zipcode: String,
  }
});


