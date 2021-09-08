import { Router } from 'express';

const newsFormRouter = Router();

newsFormRouter.get("/", (req, res) => {
    res.render("admin/form_add_new");
});

export default newsFormRouter