import { Application, Router } from "https://deno.land/x/oak@v6.3.1/mod.ts"
let lastId = 0;

const app = new Application();
const router = new Router();

router
    .post("/item", async context => {
        const requestBody = await context.request.body({ type: "json" }).value;
        lastId = requestBody.id;
        context.response.body = "ok";
    })
    .get("/item", contet => {
        context.response.body = "ok";
    });

app.use(router.routes());
app.listen({port:8000});