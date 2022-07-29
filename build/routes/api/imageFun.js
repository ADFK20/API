"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const imgRoutes = (0, express_1.Router)();
imgRoutes.get("/", async (req, res) => {
    console.log("hello World from rout fun");
    const name = req.query.fileName;
    const width = req.query.width;
    const height = req.query.height;
    await (0, sharp_1.default)(path_1.default.resolve() + `\\images\\${name}.jpg`)
        .resize(width, height).png()
        .toFile(`${path_1.default.resolve()}\\created\\images\\${name}`);
    const location = (`${path_1.default.resolve()}\\images\\${name}.jpg`);
    return location;
    res.sendFile(location);
});
exports.default = imgRoutes;
