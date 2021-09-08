import { Router } from 'express';
import homeRouter from './home';
import newsRouter from './news';
import newsFormRouter from './newsForm';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/noticias', newsRouter);
routes.use('/form_noticia', newsFormRouter);


export default routes;