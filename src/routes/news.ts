import { Router } from 'express';
import { connection } from '../server';

const newsRouter = Router();

const query = 'select * from news';
newsRouter.get("/", (req, res) => {
    connection.query(query, (error, response) => {
        if(error) res.status(500).json(error);

        // res.status(200).json({"data": response});
    });
    // res.render("news/news");
});

export default newsRouter;
