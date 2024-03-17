const path = require("path")
const fs = require("fs")
const userFilePath = path.join(__dirname, '/users.json');

// console.log(userFilePath)
function findUser(userName){
    const rawData = fs.readFileSync(userFilePath, 'utf8')
    const users = JSON.parse(rawData)
    const user = users.find((user) => user.username === userName)

    return(user)
}

module.exports = findUser;