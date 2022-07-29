"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageFun_1 = __importDefault(require("./imageFun"));
const routes = express_1.default.Router();
// routes.get('/', (req, res)=>{
//     res.send('hi in the main route');
//     console.log("hello World")
// });
routes.get('/api', (req, res) => {
    res.send('hi in the api main route');
    console.log("hi World");
});
routes.use('/image', imageFun_1.default);
exports.default = routes;
