import Router from 'koa-router';
import path from 'path';

const api = new Router();

api
  .get('/', async (ctx) => {
    // 渲染模板
    console.log(1);
    ctx.body = 'test!';
  })
  .get('/index', async (ctx) => {
    console.log(path.resolve(__dirname, '../../index.html'));
    // 发送静态文件
    await ctx.send(ctx, 'index.html', { root: path.resolve(__dirname, '../../') });
  });

export default api;
