export default {
  async fetch(req: Request) {

    if (req.method === "POST") {
      return new Response(JSON.stringify({ allow: true }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("OK");
  },
};
