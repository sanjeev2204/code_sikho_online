// console.log("called index");

import { Server } from './server';

let server= new Server().app;
let port=5000
server.listen(port,()=>{
    console.log("server is running at port 5000");
    
});

// const databaseUrl=getEnvironmentVariables().db_url;
// mongoose.connect(databaseUrl).then(()=>{
//     console.log('connected to database');
    
//   })
// console.log(getEnvironmentVariables().db_url);


// app.get('/login',(req,res)=>{
//     res.send("success");
// })

// app.get('/login',(req,res)=>{
//     const data={first_name:'sam',last_name:'sharma'};
//     res.send(data)
// })

// app.get('/login',(req,res)=>{
//     res.json({
//         'fisrt_name':'sam',
//         "last_name":'sharma.'
//     });
// })

// app.use(function(req,res,next){
//     console.log("called");
//     next();
//     });


// app.get('/login',(req:any,res,next)=>{
//     const data= [{name:'testUserName'}]
//     req.user=data;
//     next();
// },(req:any,res,next)=>{
//     console.log("called another middleware");
//     res.send(req.user)
    
// })

// app.get('/test',(req,res)=>{
//     res.send('this is a test request')
// });


