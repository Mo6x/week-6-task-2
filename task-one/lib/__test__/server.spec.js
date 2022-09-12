"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../src/app"));
const supertest_1 = __importDefault(require("supertest"));
const fs_1 = require("fs");
const model_1 = require("../src/model/model");
// import { db_path, readDatabase } from "../src/controllers/controllers";
const properData = {
    organization: 'node stack',
    createdAt: '2020-08-12T19:04:55.455Z',
    updatedAt: '2020-08-12T19:04:55.455Z',
    products: ['developers', 'pizza'],
    marketValue: '90%',
    address: 'Ikeja',
    ceo: 'cn',
    country: '33',
    id: 22,
    noOfEmployees: 2,
    employees: ['Caleb', 'Ben', 'Ebeneezer'],
};
//Delete the database file at start & end
(0, fs_1.unlink)(model_1.db_path, () => { });
describe('Testing homepage & /users without database', () => {
    it('Test homepage to ensure sever is up', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default).get('/');
        expect(res.statusCode).toBe(200);
        //   });
        //   it("Expect 404 when there's no database", async () => {
        //     const res = await request(app).get('/users');
        //     expect(res.statusCode).toBe(404);
        //   });
        // });
        // describe('Testing index users middleware', () => {
        //   it('Date not created by user', async () => {
        //     const res = await request(app).post('/users').send(properData);
        //     const resData = JSON.parse(res.text);
        //     const expected = resData[resData.length - 1];
        //     expect(res.statusCode).toBe(200);
        //     expect(expected.ceo).toBe(properData.ceo);
        //     expect(properData.createdAt).not.toBe(expected.createdAt);
        //     expect(properData.updatedAt).not.toBe(expected.updatedAt);
        //   });
        //   it('Users id are created in ascending order', async () => {
        //     const res = await request(app).post('/users').send(properData);
        //     const resData = JSON.parse(res.text);
        //     const expected = resData[resData.length - 1];
        //     expect(res.statusCode).toBe(200);
        //     expect(expected.id).toBe(resData.length);
        //   });
        //   it('Posting invalid input', async () => {
        //     const res = await request(app).post('/users').send({ ceo: 1 });
        //     expect(res.statusCode).toBe(400);
        //     // expect(res.text).toContain('Wrong data input');
        //   });
        // });
        // describe('Testing users users middleware', () => {
        //   const testNum = 2;
        //   let dataLength = 0;
        //   it('/users/id - Getting user by id works', async () => {
        //     const data = await readDatabase(db_path, { encoding: 'utf-8', flag: 'r' });
        //     const database = JSON.parse(data);
        //     dataLength = database.length;
        //     const res = await request(app).get(`/users/${testNum}`);
        //     if (testNum <= dataLength && testNum > 0) {
        //       const resData = JSON.parse(res.text);
        //       expect(res.statusCode).toBe(200);
        //       expect(resData.id).toBe(testNum);
        //     } else {
        //       expect(res.statusCode).toBe(404);
        //       // expect(res.text).toContain(`User ${testNum} not found`);
        //     }
        //   });
        //   it('/users/id - Editing user works', async () => {
        //     const data = await readDatabase(db_path, { encoding: 'utf-8', flag: 'r' });
        //     const database = JSON.parse(data);
        //     const goodFmt = { ceo: 'Chika' };
        //     const badFmt = { ceo: ['Chika'] };
        //     const goodRes = await request(app).put(`/users/${testNum}`).send(goodFmt);
        //     const badRes = await request(app).put(`/users/${testNum}`).send(badFmt);
        //     if (testNum <= dataLength && testNum > 0) {
        //       const goodData = JSON.parse(goodRes.text);
        //       expect(goodRes.statusCode).toBe(200);
        //       expect(goodData.ceo).toBe('Chika');
        //       expect(badRes.statusCode).toBe(404);
        //       // expect(badRes.text).toContain('Wrong data input');
        //     }
        //   });
        //   it('/users/id - Deleting user works', async () => {
        //     if (testNum <= dataLength && testNum > 0) {
        //       const res = await request(app).delete(`/users/${testNum}`);
        //       const data = await readDatabase(db_path, {
        //         encoding: 'utf-8',
        //         flag: 'r',
        //       });
        //       const database = JSON.parse(data);
        //       expect(res.statusCode).toBe(200);
        //       expect(database.length).toBe(dataLength - 1);
        //     }
        //   });
        // });
        // describe('GET /users with database', () => {
        //   it('Expect 200 when there is database', async () => {
        //     const res = await request(app).get('/users');
        //     expect(res.statusCode).toBe(200);
        //   });
        //   it('Ensure the database was responded', async () => {
        //     const data = await readDatabase(db_path, { encoding: 'utf-8', flag: 'r' });
        //     const res = await request(app).get('/users');
        //     expect(res.statusCode).toBe(200);
        //     expect(res.text).toBe(data);
    }));
});
