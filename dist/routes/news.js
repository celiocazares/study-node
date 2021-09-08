"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = require("../server");
const newsRouter = (0, express_1.Router)();
const query = 'select * from news';
newsRouter.get("/", (req, res) => {
    server_1.connection.query(query, (error, response) => {
        if (error)
            res.status(500).json(error);
        // res.status(200).json({"data": response});
    });
    // res.render("news/news");
});
exports.default = newsRouter;
//# sourceMappingURL=news.js.map