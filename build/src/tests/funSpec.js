"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const check = (0, supertest_1.default)(index_1.default);
describe(' image  testing .... ', () => {
    it('there is no data ', async () => {
        const inputs = await check.get('/image');
        expect(inputs.status).toBe(400);
        expect(inputs.text).toBe('you should enter file name,width,height');
    });
});
