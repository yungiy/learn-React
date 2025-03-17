const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello World'
});

app.listen(4000, ()=>{
  console.log('Server started on port 4000');
});