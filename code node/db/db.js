const sequelize = require("sequelize");
const connection = new sequelize("mysql://root:root@localhost:3306/node");

connection 
.authenticate()
.then(function(){
    console.log("connected");
})

.catch(function (err){
    console.log(err);
});

module.exports = connection;
