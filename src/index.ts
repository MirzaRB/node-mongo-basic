import dotEnv from 'dotenv';

dotEnv.config({
  path: '.env',
});

import App from './app';
import IndexRoute from './routes/index.router';

const app = new App([new IndexRoute()]);

app.listen();
