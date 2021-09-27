// // export class UserController{
// //     static login(req,res,next){
// //         //res.send('we are here to login')

// import User from "../models/User";


// //         //if user and password match then return user else error that user and password does not match
        
// //         //DRY (DO NOT REPEAT YOURSELF)
// //         // res.status(422).json({
// //         //     message:'user and password does not matched',
// //         //     status_code:422
// //         // });
// //         const error=new Error('user does not exist');
// //         // next(error);
// //         next()
// //     }

// //     static test(req,res,next){
// //         console.log('called');
// //     }   
// // }

// // query string
// // export class UserController{
// //     static login(req,res,next){
// //         // res.send(req.query)
// //         res.send(req.body)
// //     }

// //     
// //  }

// // export class UserController{
// //     static login(req,res,next){
// //        const email=req.body.email;
// //        const password=req.body.password;

// //        const user=new User({email:email,password:password})
// //        user.save().then((user)=>{
// //            res.send(user)
// //        }).catch(err=>{
// //            next(err)
// //        })
// //     }
    
// // }
// import { validationResult } from "express-validator";
// import { Error } from "mongoose";
// export class UserController{
//     static login(req,res,next){
//         // const error=validationResult(req);
//         // const username=req.body.username;
//         // const emil=req.body.email;
//         // const password=req.body.password;
//         // if (!error.isEmpty()){
//         //     // console.log(error.array());
//         //     const newError=new Error(error.array()[0].msg)
//         //     next(newError)
//         // }
//     }
// }
import { validationResult } from "express-validator";
import User from "../models/User";
import { Utils } from "../utils/Utils";
export class UserController{
    static async signup(req,res,next){
      // console.log(Utils.generateVerificationToken());
      
     
      const email=req.body.email;
      const password=req.body.password;
      const username=req.body.username;

    
      const data={
          email:email,
          password:password,
          username:username,
          verification_token:Utils.generateVerificationToken(),
          verification_token_time:Date.now()+new Utils().MAX_TOKEN_TIME
      };
    //   let user=new User(data)
    //   user.save().then((user)=>{
    //       res.send(user)
    //   }).catch((err)=>{
    //       next(err)
    
    //   })
    try{
        let user = await new User(data).save();
        // send verification email
        res.send(user);
    }catch(e){
      next(e)
    }

    }

    static async verify(req,res,next){
       const verificationToken=req.body.verification_token;
       const email=req.body.email;

      
       try{
        const user=User.findOneAndUpdate({email:email,verification_token:verificationToken,
          verification_token_time:{$gt:Date.now()}
        },{verified:true},{new :true})

          if(user){
            res.send(user)
          }else{
            throw new Error('Verification token is expired. please request for a new one')
          }
       }catch(e){
         next(e)
       }
    }
}
