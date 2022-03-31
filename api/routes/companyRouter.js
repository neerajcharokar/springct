const express = require('express');
const router = express.Router();
const companyService = require('../service/companyService')

router.post('/addcompany',(req,res,next)=>{    
    let companyObj = {};
    companyObj.name = req.body.name;
    companyObj.place = req.body.place;  
    companyService.addCompany(companyObj).then(response=>{
        if(response){
            res.json(response)
        }
    }).catch(error=>{
        throw error;
    })
})

router.get('/getcompany',(req,res,next)=>{
    companyService.getCompany().then(response=>{
        if(response){
            res.json(response);
        }
    }).catch(error=>{
        throw error;
    })
})

router.delete('/deletecompany/:name',(req,res,next)=>{
    let companyName = req.params.name
    companyService.deleteCompany(companyName).then(response=>{
        if(response){
            res.json(response)
        }
    }).catch(error=>{
        throw error;
    })
})


module.exports = router;