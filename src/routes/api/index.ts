import {Request, request,Response,response, Router} from "express";
import imgRoutes from "./imageFun";

const routes = Router();
// routes.get('/', (req, res)=>{
//     res.send('hi in the main route');
//     console.log("hello World")
// });

routes.get('/', (req:Request, res:Response)=>{
    res.send('hi in the api main route');
    console.log("hi World")
});
routes.use('/image', imgRoutes);



export  default routes ;