import * as Koa from 'koa';

import routes from './routes';
import syncDb from './sync-db';

const app = new Koa();

(async () => {
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) { //error handling
      const status = err.statusCode || err.status || 500;
      ctx.status = status;
      ctx.body = {
        errors: [{
          title: err.name,
          detail: err.message,
          status
        }]
      }
    }
  });

  await routes(app);

  app.listen(3001);
  console.log('App listening on port 3000');

  syncDb(process.env.SEED_REMOVE);

})();
