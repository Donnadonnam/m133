import {
  serve
} from "https://deno.land/std@0.74.0/http/server.ts";
const server = serve({
  port: 8000
});
console.log("HTTP Web Server running: http://127.0.0.1:8000/");

for await (const request of server) {
  const index = await Deno.open("index.html");
  if (request.url == "/bar") {
    request.respond({
      body: index
    });
  }
  request.respond({
    status: 200,
    body: index
  });
}