Deno.serve((req) => {
  const url = new URL(req.url);

  if (url.pathname === "/check") {
    return new Response(
      JSON.stringify({
        status: "ok",
        message: "lisans aktif"
      }),
      {
        headers: {
          "content-type": "application/json; charset=utf-8"
        }
      }
    );
  }

  return new Response("not found", { status: 404 });
});
