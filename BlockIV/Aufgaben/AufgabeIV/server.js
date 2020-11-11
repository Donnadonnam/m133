import {Application, Router, send} from "https://deno.land/x/oak@v6.3.1/mod.ts";

const app = new Application();
const router = new Router();
router
    .get("/images", (context) => {
        return send(context, "images.html")
    })

app.use(router.routes());
app.listen({port:8000});
console.log("HTTP Web Server running: http://127.0.0.1:8000/");



const images = Deno.readDir("images");