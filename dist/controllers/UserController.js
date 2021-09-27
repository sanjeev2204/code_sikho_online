"use strict";
// // export class UserController{
// //     static login(req,res,next){
// //         //res.send('we are here to login')
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
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
const express_validator_1 = require("express-validator");
const User_1 = require("../models/User");
class UserController {
    static signup(req, res, next) {
        const error = (0, express_validator_1.validationResult)(req);
        const email = req.body.email;
        const password = req.body.password;
        const username = req.body.username;
        if (!error.isEmpty()) {
            return next(new Error(error.array()[0].msg));
        }
        const data = {
            email: email,
            password: password,
            username: username
        };
        let user = new User_1.default(data);
        user.save().then((user) => {
            res.send(user);
        }).catch((err) => {
            next(err);
        });
    }
}
exports.UserController = UserController;
