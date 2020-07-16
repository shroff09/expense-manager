const express = require("express");
const Expense = require(".././model/expense");
const router = express.Router();

//get method
 router.get('/',async (req,res)=>{
   try {
      const expense = await Expense.find();
      return res.status(200).json({
         success:true,
         count:expense.length,
         data:expense
      });
   } catch (err) {
      return res.status(500).json({
         success:false,
         error:'server Error'
      });
   }
});

//post method
router.post('/',async (req,res,next) =>{
   try {
      const {text,amount} = req.body;
      const expense = await Expense.create(req.body);
      return res.status(201).json({
         success:true,
         data:expense
      });
   } catch (err) {
      if(err.name === 'ValidationError'){
         const message = object.values(err.errors).map(val => val.message);
         return res.status(400).json({
            success:false,
            error:message
         });   
      }else{
         return res.status(500).json({
            success:false,
            error:'server error'
         });
      }
   }
});

//delete method
router.delete('/:id',async(req,res,next) =>{
 try {
    const expense = await Expense.findById(req.param.id);
    if(!expense){
       return res.status(400).json({
          success:false,
          error:'No expense found'
       });
    }
    await expense.remove();
    return res.status(200).json({
       success:true,
       data:{}
    });
 } catch (err) {
    return res.status(500).json({
       success:false,
       error:'server error'
    })
    
 }
})

module.exports = router;