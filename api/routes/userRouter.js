const express = require('express');
const router = express.Router();
const userService = require('../service/userService');

router.post('/adduser',(req,res,next)=>{
    let userObj = {};
    userObj.name = req.body.name;
    userObj.email = req.body.email;
    userObj.phone = req.body.phone;
    userObj.companyName = req.body.companyName;
    userService.addUser(userObj).then(response=>{
        if(response){
            res.json(response)
        }
    }).catch(error=>{
        throw error;
    })
})

router.get('/getuser',(req,res,next)=>{
    userService.getUser().then(response=>{
        if(response){
            res.json(response);
        }
    }).catch(error=>{
        throw error;
    })
})
router.get('/getcompanyuser/:companyName',(req,res,next)=>{
    let companyName = req.params.companyName
    userService.getUser(companyName).then(response=>{
        if(response){            
            res.json(response);
        }
    }).catch(error=>{
        throw error;
    })
})



module.exports = router;