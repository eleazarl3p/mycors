const cors_proxy = require("cors-anywhere");

const host = "https://mycors-d9no.onrender.com";
const port = process.env.PORT || 4000;

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, () => {
    console.log(`Running CORS Anywhere on ${host}:${port}`);
  });
