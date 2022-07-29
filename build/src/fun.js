"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
// the resize fun
const resize = async (width, height, location, newlocation) => {
    const resizeimg = await 
    //using sharp to resize my image
    (0, sharp_1.default)(location)
        .resize(width, height)
        .jpeg({ mozjpeg: true });
    //addind the  new image 
    return fs_1.default.promises.writeFile(newlocation, resizeimg);
};
exports.default = resize;
