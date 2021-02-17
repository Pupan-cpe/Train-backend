const Staff = require('../model/staff');



exports.index = async (req, res, next) => {
    const staffs = await Staff.find().sort({_id: -1});
    console.log(staffs);
    res.status(200).json({
        data: staffs

    });

}

exports.show = async (req, res, next) => {
  try {
    const {id} = req.params; // destuc
    // const staffs = await Staff.findOne({_id: id }); // find one  "pw"
    const staffs = await Staff.findById(id);


    if(!staffs){
        throw new Error('idไม่ถูกต้อง');
    }
    // console.log(staffs);
    res.status(200).json({
        data: staffs

    });
 
      
  } catch (error) {
      res.status(400).json({
        error:{
            message: 'ข้อผิดพลาด' + error.message
        }
    })
  }

}
exports.insert = async (req, res, next) =>{
    // res.status(200).json
    //     ({ message: '----------post path api --------' });



    // const  {name, salary} = req.body;

    let  staff = new Staff(req.body);
    await staff.save();

    res.status(200).json({
        message: 'success!'
    })

    // res.status(200).json({
    //     data: name, salary,
    // })
    // aaa = req.body;
    // console.log(aaa);

};


