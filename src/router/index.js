import debug from 'debug';
import Router from 'koa-router';
import path from 'path';

const api = new Router();
const log = debug('router');

api
  .get('/test', async (ctx) => {
    // 渲染模板
    log(ctx.toJSON());
    ctx.body = 'test!';
  })
  .get('/index', async (ctx) => {
    log(path.resolve(__dirname, '../../index.html'));
    // 发送静态文件
    await ctx.send(ctx, 'index.html', { root: path.resolve(__dirname, '../../') });
  });

export default api;
