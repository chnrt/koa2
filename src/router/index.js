// import debug from 'debug';
import Router from 'koa-router';
import send from 'koa-send';
import path from 'path';
// import wilddog from 'wilddog';

// const config = {
//   authDomain: 'bai-todo.wilddog.com',
//   syncURL: 'https://bai-todo.wilddogio.com', //输入节点 URL
// };
// wilddog.initializeApp(config);
// const ref = wilddog.sync().ref();

const api = new Router();

api
  .get('/', async (ctx) => {
    await send(ctx, 'index.html', { root: path.resolve(__dirname, '../../') });
  })
  .get('/index', async (ctx) => {
    await ctx.send(ctx, 'index.html', { root: path.resolve(__dirname, '../../') });
  });

export default api;
