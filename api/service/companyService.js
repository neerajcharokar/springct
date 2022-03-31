const companyModel = require('../model/companyModel');

let companyService = {};

companyService.addCompany = (companyObj)=>{
    return companyModel.addCompany(companyObj).then(response=>{
        if(response){
            return response;
        }
    }).catch(error=>{
        throw error;
    })
}

companyService.getCompany = ()=>{
    return companyModel.getCompany().then(response=>{
        if(response){
            return response;
        }
    }).catch(error=>{
        throw error;
    })
}

companyService.deleteCompany = (companyName)=>{
    return companyModel.deleteCompany(companyName).then(response=>{
      return response  
    }).catch(error=>{
        throw error;
    })
}

module.exports = companyService;