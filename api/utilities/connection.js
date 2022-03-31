const Mongoose = require('mongoose');
const { Schema } = require('mongoose');
Mongoose.Promise = global.Promise;

const url = "mongodb://localhost:27017/springct_db"

let companySchema = Schema({
    name: String,
    place: String,
}, { collection: "company" });

let userSchema = Schema({
    name: String,
    email: String,
    phone: Number,
    companyName: [String]
}, { collection: "user" });

let collection = {};

collection.getCompanyCollection = ()=>{
    return Mongoose.connect(url,{useNewUrlParser:true}).then(database=>{
        return database.model('Company',companySchema)
    }).catch(error=>{
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

collection.getUserCollection = ()=>{
    return Mongoose.connect(url,{useNewUrlParser:true}).then(database=>{
        return database.model('User',userSchema)
    }).catch(error=>{
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

module.exports = collection;
