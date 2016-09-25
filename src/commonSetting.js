import compose from 'koa-compose';
import restime from 'koa-response-time';
import compress from 'koa-compress';
import zlib from 'zlib';
import logger from 'koa-logger';
import conditional from 'koa-conditional-get';
import etag from 'koa-etag';
import favicon from 'koa-favicon';
import serve from 'koa-static';
import path from 'path';

const setting = compose([
  restime(),
  compress({
    threshold: 2048,
    flush: zlib.Z_SYNC_FLUSH,
  }),
  logger(),
  conditional(),
  etag(),
  favicon(path.resolve(__dirname, '../public/favicon.ico')),
  serve(path.resolve(__dirname, '../public/')),
]);

export default setting;
