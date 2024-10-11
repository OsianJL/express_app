"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoRouting_1 = __importDefault(require("./routes/todoRouting"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use("/todos", todoRouting_1.default);
app.use((err, req, resp, next) => {
    resp.status(500).json({ message: err.message });
});
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
