const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:"dorlandotech@gmail.com",
      pass:'GageSpdr2001'
    }
  })    
 
router.post("/api/contact",(req,res)=>{
    transporter.sendMail(req.body, (error,info)=>{
        if(error) console.log(error);
        else{
          console.log('Email sent: ' + info.response);
         return res.json()
        }
      })
})
router.get("/api/contact",(req,res)=>{
    return res.send("Hi")
})
// path to the static react build directory    

module.exports = router;