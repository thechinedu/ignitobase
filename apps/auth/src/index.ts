const port = process.env.PORT;

Bun.serve({
  port,
  routes: {
    "/": new Response("IgnitoBase Auth Server: v 0.0.1"),
    "/users": new Response("Ok"),
  },
});

console.log(`Auth server started on port ${port}`);
