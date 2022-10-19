const Koa = require("koa");
const Router = require("@koa/router");

const PORT = 80;

const app = new Koa();
const router = new Router();

router.get("/ping", (ctx, next) => {
  ctx.body = "Pong";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
