const mongoose = require("mongoose");
const schema = mongoose.Schema;

const dishSchema = new schema({
  name: {
    type: String,
    required: true
  },
  chefName: {
    type: String
  },
  chefId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "profile"
  },
  dishImages: {
    type: [String]
  },
  recipe: {
    type: [String]
  },
  likes: { 
    type: Number, 
    min: 0, 
    default: 0 
  },
  ingredients: {
    type: [String],
    required: true
  },
  healthBenefits: {
    type: [String]
  },
  comments: [{
    chefEmail: String,
    chefName: String,
    comment: String,
  }],
});

const Dish = mongoose.model("dish", dishSchema);

module.exports = Dish;
