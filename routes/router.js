const express = require("express");
const expense = require(".././model/expense");
const router = express.Router();

router.post('./insert',(req,res)=>{
   const Expense = new expense();
   Expense.description = req.body.description;
   Expense.amount = req.body.amount;
   Expense.month =  req.body.month;
   Expense.year = req.body.year;
   Expense.save((err)=>{
             if(err)
             res.send(err);
             res.send('expense added successfully');
   });
});

