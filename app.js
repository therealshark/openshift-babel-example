const Koa = require("koa");
const app = new Koa();

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.use(async ctx => {
  ctx.body = "Hello World";
});

app.listen(port);
