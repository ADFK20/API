"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myFile = String(req.query.fileName);
const checkFileNames = (myFile) => {
    const FileNames = ["appel.jpg"];
    FileNames.push(String(req.query.fileName));
    if (FileNames.includes(String(req.query.fileName))) {
        res.append('Warning', 'this name already exist');
    }
};
exports.default = checkFileNames;
