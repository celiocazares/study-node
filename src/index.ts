import { app } from './server';
import routes from './routes';
const port = process.env.SERVER_PORT; // default port to listen

app.use(routes);
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log('SERVER ON');
});