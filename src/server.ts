import http from "http";
import express from "express";
import config from "./config/config";
import routes from "./routes/routes";
import connect from "./db/connect";

const router = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET POST");
    return res.status(200).json({});
  }

  next();
});

router.use("/", routes);

router.use((req, res, next) => {
  const error = new Error("not found");

  return res.status(404).json({
    message: error.message,
  });
});

const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => {
  console.log(
    `Server running on http://${config.server.hostname}:${config.server.port}`
  );

  connect();
});
