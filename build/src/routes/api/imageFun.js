"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const fs_2 = __importDefault(require("fs"));
const _data_1 = __importDefault(require("../../../data/_data"));
const fun_1 = __importDefault(require("../../fun"));
// the  fun that check and handel the Querys of the request 
const check = (0, express_1.Router)();
check.get("/", async (req, res) => {
    // chacking the the route is right 
    console.log("hello this is the main image route");
    // declear all the constants these i'm gonna need 
    const Query = req.query;
    const name = Query.name;
    const width = parseInt(String(Query.width));
    const height = parseInt(String(Query.height));
    const project = path_1.default.resolve('./');
    const location = project + `/images/${name}.jpg`;
    const newimges = project + '/images/created/';
    const title = _data_1.default.includes(name);
    const newlocation = newimges + name + '-(' + width + ',' + height + ').jpg';
    const existlocation = (0, fs_1.existsSync)(location);
    const existnewlocation = (0, fs_1.existsSync)(newlocation);
    // handeling request and erroes
    if (!name || !width || !height) {
        console.log('this is the first test : ' + name + width + height);
        return res
            .status(400)
            .send(`<h2 style='color: red; margin-left:40%;'>required parameter is missing</h2>`);
    }
    else if (title === false) {
        console.log('the 2nd test : ' + name + width + height);
        return res
            .status(402)
            .send(`<h2 style='color: red; margin-left:40%;'>parameter name isn't exist</h2>`);
    }
    else if (existlocation === false) {
        console.log(`<h2 style='color: red; margin-left:40%;'>this is not exist image</h2>`);
        return res
            .status(400)
            .send(`<h2 style='color: red; margin-left:40%;'>this is not exist image</h2>`);
    }
    else if (!existnewlocation) {
        await (0, fun_1.default)(width, height, location, newlocation);
    }
    else if (name && width && height) {
        if (!fs_2.default.existsSync(newimges)) {
            fs_2.default.mkdirSync(newimges);
        }
        else
            newimges;
        if (!existnewlocation) {
            await (0, fun_1.default)(width, height, location, newlocation);
        }
        else
            console.log('\n -----------\nThe new location: ', newlocation);
        //the final fun that will resize the image 
        return res.status(200).sendFile(newlocation);
    }
});
exports.default = check;
