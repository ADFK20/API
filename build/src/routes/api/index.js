"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageFun_1 = __importDefault(require("./imageFun"));
//this is the main route 
const routes = (0, express_1.Router)();
// the main route that collect my route and passing it to my app
routes.get('/', (req, res) => {
    res.send('hi in the api main route');
    console.log("hi World");
});
//the resizing api
routes.use('/image', imageFun_1.default);
exports.default = routes;
