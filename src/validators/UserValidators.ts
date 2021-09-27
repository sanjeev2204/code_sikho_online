// import{body} from 'express-validator';
// import { Error } from 'mongoose';
// export class UserValidators{
//     static login(){
//         return [body('username','Username is Required').isString(),
//                 body('email', 'email is required').isEmail(),
//                 body('password').custom((req)=>{
//                     if(req.body.email){
//                         return true
//                     }else{
//                         throw new Error('Testing custom validation');
//                     }
//                 })]
//     }
// }
import {body} from 'express-validator'
import User from '../models/User';
export class UserValidators {
    static signup(){
        return [body('email','email is required').isEmail().custom((email,{req})=>{
            console.log(req.body);
            return User.findOne({email:email}).then(user=>{
                if(user){
                    throw new Error('User already exist')
                }else{
                    return true;
                }
            })
            
        }),
                body('password','password is required').isAlphanumeric().isLength({min:8,max:20})
                .withMessage('password can be from 8-20 characters only'),
                body('username','username is required')];
    }

    static verifyUser(){
        return[body('verification_token','Verification Token is required').isNumeric(),
               body('email','email is required').isEmail()]
    }
}