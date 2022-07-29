import {Request, request,Response,response, Router} from "express";
import imgRoutes from "./imageFun";
//this is the main route 
const routes = Router();
// the main route that collect my route and passing it to my app
routes.get('/', (req:Request, res:Response)=>{
    res.send('hi in the api main route');
    console.log("hi World")
});
//the resizing api
routes.use('/image', imgRoutes);



export  default routes ;