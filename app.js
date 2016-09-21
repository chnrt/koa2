import Koa from 'koa';
import send from 'koa-send';
import server from 'koa-static';

import router from './src/router/index';

const app = new Koa();

// 全局错误处理
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.body = err;
    ctx.status = err.status || 500;
  }
});

// send Files
app.use(async (ctx, next) => {
  ctx.send = send;
  await next();
});

app.use(router.routes());

app.listen(3000);
