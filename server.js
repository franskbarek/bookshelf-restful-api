"use strict";

const Hapi = require("@hapi/hapi");
const routes = require("./src/routes");

const initServer = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: { cors: { origin: ["*"] } },
  });

  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada %s 🚀`, server.info.uri);
};

initServer();