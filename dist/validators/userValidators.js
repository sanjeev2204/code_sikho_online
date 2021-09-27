"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidators = void 0;
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
const express_validator_1 = require("express-validator");
class UserValidators {
    static signup() {
        return [(0, express_validator_1.body)('email', 'email is required').isEmail(),
            (0, express_validator_1.body)('password', 'password is required').isAlphanumeric().isLength({ min: 8, max: 20 })
                .withMessage('password can be from 8-20 characters only'),
            (0, express_validator_1.body)('username', 'username is required')];
    }
}
exports.UserValidators = UserValidators;
