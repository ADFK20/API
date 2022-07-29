import {Router, Request, Response} from "express";
import {existsSync} from 'fs'
import path from 'path'
import fs from 'fs'
import titles from "../../../data/_data";
import resize from "../../fun";

const check = Router();

check.get("/",   async (req:Request, res:Response)=>{

    console.log("hello this is the main image route");
    
    const Query = req.query;

    const name: string = Query.name            as string;
    const width =parseInt(String(Query.width)) as number;
    const height=parseInt(String(Query.height))as number;

    const project = path.resolve('./');
    const location = project +`/images/${name}.jpg`;

    const newimges =  project +'/images/created/'
//     const newlocation = project +'/images/created'+name + width +'*'+height+'.jpg';

    const title =titles.includes(name);

    
    const newlocation : string | undefined =
    newimges + name + '-(' + width + ',' + height + ').jpg';
    const existlocation: boolean = existsSync(location);
    const existnewlocation: boolean = existsSync(newlocation);
   
    if 
    (!name || !width|| !height ) {
        console.log('this is the first test : '+name+width+height);
   return res
    .status(400)
    .send (`<h2 style='color: red; margin-left:40%;'>required parameter is missing</h2>`);
    }
     else if
       (title === false) {
        console.log('the 2nd test : '+name+width+height);
     return  res
    .status(402)
    .send (`<h2 style='color: red; margin-left:40%;'>parameter name isn't exist</h2>`);
    }
    else if
     (existlocation === false){
        console.log(`<h2 style='color: red; margin-left:40%;'>this is not exist image</h2>`)
    return res
    .status(400)
    .send(`<h2 style='color: red; margin-left:40%;'>this is not exist image</h2>`)
}
  else if
    (!existnewlocation){
        await resize(width,height, location, newlocation)
    }

 else if (name && width && height) {
    if (!fs.existsSync(newimges)) {
      fs.mkdirSync(newimges);
    } else newimges;
    if (!existnewlocation) {
      await resize( width, height,location,newlocation);
    }    else console.log('\n -----------\nThe new location: ', newlocation);
    return res.status(200).sendFile(newlocation) as void as undefined;
}
});

export default check;

