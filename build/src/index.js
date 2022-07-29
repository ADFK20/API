"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageFun_1 = __importDefault(require("./routes/api/imageFun"));
const port = 5000;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send(`<div style='display: flex;
    align-items: center;
    justify-content: center;
        
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: burlywood;
    color: red;'><h1 style='color:blue'>welcome this "coda" my API</h1></div>`);
});
app.use('/image', imageFun_1.default);
app.listen(port, () => {
    console.log("localhost is  on " + port);
});
exports.default = app;
