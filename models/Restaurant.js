const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter restaurant name'],
    lowercase: true
  },
  cuisine:{
    type: String,
    required: [true, 'Please enter cuisine'],
    lowercase: true
  },
  city:{
    type: String,
    required: true,
    lowercase: true
  },
  restaurant_id:{
      type: String,
      required:true,
  },
  address: [{ 
      building: String,
      street:{
        type: String,
        required: true,
        lowercase: true,
      },
      zipcode: String
  }],

});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;