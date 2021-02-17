const Company = require('../model/company');



exports.index = async (req, res, next) => {
   const companys  = await Company.findOne();
   console.log(companys);
   res.status(200).json({
       data: companys
       
   });
 
}

// exports.register = function(req, res, next) {
//     res.status(200).json
//         ({message:'----------register path api --------'});
// //   console.log(req.json);
// //   console.log(req);
// // console.log(object);
// // console.log(res.data);
// // console.log(req);
  
// aaa = req.body ;
// console.log(aaa);
// //   console.log(req.body.data);
//     };



// exports.index = function(req, res, next) {
//     res.status(200).json
//         ({message:'respond with a resource'});
//   };

  let aaa;
exports.register = function(req, res, next) {
    res.status(200).json
        ({message:'----------register path api --------'});
//   console.log(req.json);
//   console.log(req);
// console.log(object);
// console.log(res.data);
// console.log(req);
  
aaa = req.body ;
console.log(aaa);
//   console.log(req.body.data);
    };


    