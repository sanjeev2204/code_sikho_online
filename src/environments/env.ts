import { devEnvironment } from "./dev.env";
import { prodEnvironment } from "./prod.env";

export interface Environment{
    db_url:string;
}

 export function getEnvironmentVariables() {
   if(process.env.NODE_ENV==='production'){
       return prodEnvironment;
   }
   else{
       return devEnvironment;
   }
 }