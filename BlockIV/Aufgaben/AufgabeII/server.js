import {
    serve
  } from "https://deno.land/std@0.74.0/http/server.ts";
  const server = serve({
    port: 8000
  });
  console.log("HTTP Web Server running: http://127.0.0.1:8000/");
  
  for await (const request of server){
      switch(request.url){
        case "/foo":
          const page1 = await Deno.readTextFile("./page1.html");
          request.respond({body : page1});
          break;
        case "/bar":
          const page1 = await Deno.readTextFile("./page2.html");
          request.respond({body : page2});
          break;
        default:
          request.respond({ status: 404});
      }
  }