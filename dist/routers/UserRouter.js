"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const userValidators_1 = require("../validators/userValidators");
// import { UserValidators } from "../validators/UserValidators";
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        //  this.router.get('/login',UserController.login,UserController.test)
        //  this.router.get('/login', UserController.login)
    }
    postRoutes() {
        this.router.post('/sinup', userValidators_1.UserValidators.signup(), UserController_1.UserController.signup);
        // this.router.post('/login', UserController.login)
    }
    patchRoutes() {
    }
    deleteRoutes() {
    }
}
exports.default = new UserRouter().router;
