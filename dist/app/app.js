"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000;
// parser
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello world!!how are u doing men mamur betaa');
});
app.post('/', (req, res) => {
    res.json({ message: "sucessfully recived data" });
});
exports.default = app;
