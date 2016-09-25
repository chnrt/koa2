import Koa from 'koa';
// import send from 'koa-send';
import setting from './src/commonSetting';
// import convert from 'koa-convert';
// import path from 'path';

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

app.use(setting);

app.use(router.routes());

app.listen(3000);
