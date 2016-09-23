import debug from 'debug';
import Router from 'koa-router';
import path from 'path';
import wilddog from 'wilddog';

const config = {
  authDomain: 'bai-todo.wilddog.com',
  syncURL: 'https://bai-todo.wilddogio.com', //输入节点 URL
};
wilddog.initializeApp(config);
// const ref = wilddog.sync().ref();

const api = new Router();
const log = debug('router');

api
  .get('/test', async (ctx) => {
    // 渲染模板
    log(ctx.toJSON());

    // ref.set({
    //   test: 'hello',
    // });
    wilddog.auth()
      .createUserWithEmailAndPassword('cx5237617@163.com', '123456')
      .catch((error) => {
        log(error);
      });

    ctx.body = 'test!';
  })
  .get('/index', async (ctx) => {
    log(path.resolve(__dirname, '../../index.html'));
    // 发送静态文件
    await ctx.send(ctx, 'index.html', { root: path.resolve(__dirname, '../../') });
  });

export default api;
