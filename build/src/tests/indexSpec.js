"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const check = (0, supertest_1.default)(index_1.default);
describe('testing the main route ', () => {
    it('testing done sucessfully', async () => {
        const mainroute = await check.get('/');
        expect(mainroute.status).toBe(200);
    });
});
