"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const routes_1 = __importDefault(require("./routes"));
const port = process.env.SERVER_PORT; // default port to listen
server_1.app.use(routes_1.default);
// start the Express server
server_1.app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log('SERVER ON');
});
//# sourceMappingURL=index.js.map