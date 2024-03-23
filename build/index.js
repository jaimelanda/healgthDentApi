"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
// Define your routes here
app.get('/', (_, res) => {
    res.send('Hello, World!');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
