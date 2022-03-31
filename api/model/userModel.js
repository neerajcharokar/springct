const connection = require('../utilities/connection');

let userModel = {};

userModel.addUser=(userObj)=>{
    return connection.getUserCollection().then(collection=>{
        return collection.create(userObj).then(insertedData=>{
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

userModel.getUser = ()=>{
    return connection.getUserCollection().then(collection=>{
        return collection.find({},{_id:0,__v:0}).then(userData=>{
            if(userData){
                return userData
            }else{
                let err = new Error("No Data Found")
                err.status = 500;
                throw err;
            }
        })
    })
}

module.exports = userModel;