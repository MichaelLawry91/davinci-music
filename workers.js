export default {
  async fetch(request, env, ctx) {
    const url = new URL (request.url)

    //EDIT IN APIs
    if (url.pathname === "/api/status") {
      return new Response(JSON.stringify)({ online: true}), {
        headers: { "Content-Type": "application/json" }, 
      });
    }


    console.info({ message: 'Hello World Worker received a request!' }); 
    return env.ASSETS.fetch(request);
};
