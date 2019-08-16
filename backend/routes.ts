import * as KoaRouter from 'koa-router';
import * as koaBody from 'koa-body';
import * as cors from '@koa/cors';

import jwt from './services/jwt.service';

// Create koa router instance.
let router = new KoaRouter({
  prefix: '/api',
});



// Apply routes middleware function.
export default async (app) => {
  // Apply the routes to the app.
  app
    .use(cors({'origin': '*', credentials: true}))
    .use(koaBody({
        formidable: {uploadDir: './uploads', keepExtensions: true},
        // multipart: true,
        // urlencoded: true
    }))
    .use(router.routes());

  return router;
};