const express = require("express");
const router = express.Router();
const Beer = require("../models/beer");

router.post("/add/", async(req,res)=>{
    const beer = new Beer({
        name: req.body.name,
        type: req.body.type,
      });
    const newData = await beer.save();
        try{
            res.send(newData)
        }   
        catch(err){
            res.status(400).send(err)
        }       
        
})
router.get("/", async (req,res)=>{
    const data = await Beer.find()
    try{
        res.send(data)
    }   
    catch(err){
        res.status(400).send(err)
    }
})

router.get("/search/:name", async (req,res)=>{
    const data= await Beer.find({"name":{"$regex": req.params.name, "$options": "i"}})
    try{
        res.send(data)
    }   
    catch(err){
        res.status(400).send(err)
    }
})


router.post("/rating/:id", async (req,res)=>{
    Beer.findByIdAndUpdate({_id: req.params.id}, 
    {$push: {'rating': req.body.rating}}, 
    {new: true}, (err, result) => {
        if(err){
            res.status(400).send(err)
        }
        else{
            res.send(result)
        }
   })
})

router.get("/avg/rating/:id", (req,res)=>{
    Beer.aggregate(([ {$addFields : {average : {$avg : "$rating"}}} ]))
    .then(result=>res.send(result))
})
router.get("/del", (req,res)=>{
    Beer.remove()
    .then(result => res.send(result))
})

module.exports = router;
