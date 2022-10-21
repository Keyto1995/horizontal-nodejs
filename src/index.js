const Koa = require("koa");
const Router = require("@koa/router");

const PORT = 80;

const app = new Koa();
app.proxy = true;
const router = new Router();

router.get("/ping", (ctx, next) => {
  ctx.body = "Pong";
});

router.get("/clientIP", (ctx, next) => {
  ctx.body = { data: ctx.request.ip };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
