const userModel = require('../model/userModel');

let userService = {};

userService.addUser = (userObj) => {
    return userModel.addUser(userObj).then(response => {
        if (response) {
            return response;
        }
    }).catch(error => {
        throw error;
    })
}

userService.getUser = () => {
    return userModel.getUser().then(response => {
        if (response) {
            let resArray = [];
            response.forEach(data => {
                let companyName = ""
                data.companyName.forEach(data => {
                    companyName = companyName + `,${data}`
                })
                let str = `${data.name},${data.email},${data.phone}${companyName}`
                resArray.push(str)
            })
            return resArray;
        }
    }).catch(error => {
        throw error;
    })

}
userService.getCompanyUser = (companyName) => {
    return userModel.getUser().then(response => {
        if (response) {
            let resArray = [];
            response.forEach(data => {
                let companyName = ""
                if (data.companyName.find(name => name === companyName)) {
                    data.companyName.forEach(data => {
                        companyName = companyName + `,${data}`
                    })
                    let str = `${data.name},${data.email},${data.phone}${companyName}`
                    resArray.push(str)
                }
            })
            return resArray;
        }
    }).catch(error => {
        throw error;
    })
}
module.exports = userService;