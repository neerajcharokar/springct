const connection = require('../utilities/connection');

let companyModel = {};

companyModel.addCompany=(companyObj)=>{
    return connection.getCompanyCollection().then(collection=>{
        return collection.create(companyObj).then(insertedData=>{
            if(insertedData){
                return insertedData;
            }else{
                let err = new Error("Data not Inserted")
                err.status = 500;
                throw err;
            }
        })
    })
}

companyModel.getCompany = ()=>{
    return connection.getCompanyCollection().then(collection=>{
        return collection.find({},{_id:0,__v:0}).then(companyData=>{
            if(companyData){
                return companyData
            }else{
                let err = new Error("No Data Found")
                err.status = 500;
                throw err;
            }
        })
    })
}

companyModel.deleteCompany=(companyName)=>{
    return connection.getCompanyCollection(companyName).then(collection=>{
        return collection.deleteMany({name:companyName}).then(response=>{
            if(response.deletedCount!=0){
                return true
            }else{
                let err=new Error("Not able to delete")
                err.status=404;
                throw err;
            }
        }).catch(error=>{
            throw error
    })
    })
}

module.exports = companyModel;