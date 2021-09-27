
import bodyParser = require('body-parser');
import * as express from 'express'
import * as mongoose from 'mongoose';
import { getEnvironmentVariables } from './environments/env';
import UserRouter from './routers/UserRouter';

export class Server{
  public app:express.Application=express();

  constructor(){
    this.setConfiguration();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
    
  }

  setConfiguration(){
    this.connectMongodb();
    this.configureBodyParser();
    
  }

  connectMongodb(){
    console.log('enterted')
    const databaseUrl=getEnvironmentVariables().db_url;
    mongoose.connect(databaseUrl).then(()=>{
          console.log('connected to database');
          
        })
  }
  configureBodyParser(){
    this.app.use(bodyParser.urlencoded({extended:true}))
  }
  setRoutes(){
     this.app.use('/api/user/',UserRouter)
  }

  error404Handler(){
    this.app.use((req,res)=>{
      res.status(404).json({
        message:"Not Found",
        status_code:404
      })
    })
  }

  handleErrors(){
    this.app.use((error,req,res,next)=>{
      const errorStatus=req.errorStatus || 500;
      res.status(errorStatus).json({
        message:error.message || 'something went wrong . please try again',
        statuscode:errorStatus
      })
    })
  }
}