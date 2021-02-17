const mongoose = require('mongoose');


const Schema = new mongoose.Schema({  
        name: {type: String,required: true, trim: true},
        salary: {type: Number},
        created: {type: Date, default: Date.now(Date.now)}
},{

        
    collation: 'staffs'

});

const staff = mongoose.model('staff', Schema);  //ชื่อต้อง match กัน กับ table 
module.exports = staff;