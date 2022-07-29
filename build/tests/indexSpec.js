"use strict";
// // import supertest from "supertest"
// // import app from "../index"
// // import sharp from 'sharp';
// // import path from 'path'
// import {Router, request, response, Request, Response} from "express";
// import {existsSync} from 'fs'
// const imgRoutes = Router();
// // imgRoutes.get("/",(req, res)=>{
// //     res.send('welcome here in images')
// //     console.log('helo from images')});
// imgRoutes.get("/",async (req:Request, res:Response)=>{
//     console.log("hello World from rout fun")
//     const name = req.query.fileName as string;
//     const width = req.query.width as unknown as number;
//     const height = req.query.height as unknown as number;
//      if (name === undefined) {
//         res
//         .status(400)
//         .send('Bad request Query parameter (name) required.')
//      }
//     const Resizedimage = await imageResize(name, width, height) ;
//      res.sendFile(`${Resizedimage}`);
// })
// // const request = supertest(app);
// // describe("test end point", ()=>{
// //     it ('get end point', async() => {
// //          const response = await request.get('/api');
// //     expect (response.status).toBe(200);
// //     })
// // })
