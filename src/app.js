import express from 'express';

import routes from './routes';

const route = express.Router();
const app = express();

app.use('/boleto', route);

routes(route);

export default app;
