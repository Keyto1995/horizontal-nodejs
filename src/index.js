const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/ping", (ctx, next) => {
  ctx.body = "Pong";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(80);
