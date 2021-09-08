"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_1 = __importDefault(require("./home"));
const news_1 = __importDefault(require("./news"));
const newsForm_1 = __importDefault(require("./newsForm"));
const routes = (0, express_1.Router)();
routes.use('/', home_1.default);
routes.use('/noticias', news_1.default);
routes.use('/form_noticia', newsForm_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map