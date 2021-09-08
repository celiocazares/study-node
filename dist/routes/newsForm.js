"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newsFormRouter = (0, express_1.Router)();
newsFormRouter.get("/", (req, res) => {
    res.render("admin/form_add_new");
});
exports.default = newsFormRouter;
//# sourceMappingURL=newsForm.js.map