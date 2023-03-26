const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    username:{type:String,required:true},
    description:{type:String,required:true},
    cost:{type:Number,required:true},
    date:{type:Date,required:true},
},{
    timeStamps: true,
});

const Expense = mongoose.model('Exercise', expenseSchema);

module.exports = Expense;