const mongoose = require('mongoose');


const Schema = new mongoose.Schema({  
  name:  String, // String is shorthand for {type: String}
  address: {
        province: String
  
  },
});

const company = mongoose.model('companys', Schema);  //ชื่อต้อง match กัน กับ table 
module.exports = company;