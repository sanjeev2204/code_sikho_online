import { Router } from "express";
import { UserController } from "../controllers/UserController";
import{body} from 'express-validator';
import { UserValidators } from "../validators/userValidators";
import { GlobalMiddleware } from "../middleware/CheckError";
// import { UserValidators } from "../validators/UserValidators";

 class UserRouter{
    public router:Router;

    constructor(){
      this.router=Router();
      this.getRoutes();
      this.postRoutes();
      this.patchRoutes();
      this.deleteRoutes();
    }
    getRoutes(){
    //  this.router.get('/login',UserController.login,UserController.test)
    //  this.router.get('/login', UserController.login)
    
    }
    postRoutes(){
      this.router.post('/signup', UserValidators.signup(),GlobalMiddleware.checkError, UserController.signup)
      // this.router.post('/login', UserController.login)
    }
    patchRoutes(){
      this.router.patch('/verify',UserValidators.verifyUser(),GlobalMiddleware.checkError, UserController.verify)
    }
    deleteRoutes(){

    }
}

export default new UserRouter().router;