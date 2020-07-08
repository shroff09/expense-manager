const mongoose = require("mongoose");

const expenseShema = new mongoose.Schema({
    description:String,
    amount:Number,
    month:String,
    year:Number,
});

const expense = mongoose.model('expense',expenseShema);

module.exports = expense;