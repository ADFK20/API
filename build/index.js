"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/api/index"));
const port = 5000;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('welcome this coda API');
});
app.use('/api', index_1.default);
app.listen(port, () => {
    console.log("server is listening on " + port);
});
exports.default = app;
