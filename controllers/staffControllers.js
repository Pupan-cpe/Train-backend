const { names } = require('debug');
const Staff = require('../model/staff');



exports.index = async (req, res, next) => {
    const staffs = await Staff.find().sort({_id: -1});
    console.log(staffs);
    res.status(200).json({
        data: staffs

    });

};


exports.destroy = async (req, res, next) => {
    try {
        const { id } = req.params;

        const staffs = await Staff.deleteOne({_id: id});
        if (staffs.deletedCount === 0) {
            throw new Error('ไม่สามารถลบข้อมูลได้');
        } else {
            res.status(200).json({
                message: 'ลบข้อมูลเรียบร้อย'
            });
        }
    } catch (error) {
        res.status(400).json({
            error: {
                message: 'เกิดผิดพลาด ' + error.message
            } 
        });
    }
};
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

};



exports.insert = async (req, res, next) =>{
    // res.status(200).json
    //     ({ message: '----------post path api --------' });



    // const  {name, salary} = req.body;

    let  staff = new Staff(req.body);
    await staff.save();

    res.status(201).json({
        message: 'success!'
    })

    // res.status(200).json({
    //     data: name, salary,
    // })
    // aaa = req.body;
    // console.log(aaa);

};
// 026113939
// 026114000

// exports.update = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const { name, salary } = req.body;

//         // const staff = await Staff.findById(id);
//         // staff.name = name;
//         // staff.salary = salary;
//         // await staff.save();
//         // const staff = await Staff.findByIdAndUpdate(id, {
//         //     name: name,
//         //     salary: salary
//         // });
//         // console.log(staff);
//         const staff = await Staff.updateOne({_id: id},{
//             name: name,
//             salary: salary
//         });

//         // console.log(staff);
//         if (staff.nModified === 0) {
//             throw new Error('ไม่สามารถอัปเดตข้อมูลได้');
//         } else {
//             res.status(200).json({
//                 message: 'แก้ไขข้อมูลเรียบร้อย'
//             });
//         }
//     } catch (error) {
//         res.status(400).json({
//             error: {
//                 message: 'เกิดผิดพลาด ' + error.message
//             } 
//         });
//     }
// }



exports.update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const {name, salary } = req.body
        // const staff = await Staff.findById(id);
        // staff.name = name;
        // staff.salary = salary;
        // await staff.save();

        //วิธีที่สอง findByIdAndUpdate
        //   const staff = await Staff.findByIdAndUpdate(id,{
        //       name: name,
        //       salary: salary

        //   });
        //   console.log(staff);

        //วิธีที่ 3  
        const staff = await Staff.updateOne({ _id: id},{
            name: name,
            salary: salary
        })
        console.log(staff);

        if (staff.nModifined === 0){
            throw new Error('ไม่')
        }
        res.status(200).json({
            message: 'แก้ไขข้อมูลเรียบร้อย'
           });
        // const staff = await Staff.findById(id);
        // res.status(200).json({
        //     message: 'แก้ไขข้อมูลเรียบร้อย'
        // });
        
        } catch (error) {
        res.status(400).json({
        error: {
            message: 'เกิดผิดพลาด ' + error.message
        } 
        });
        // staff.name = name;
        // staff.salary = salary;

        // await staff.save();
    }
}

