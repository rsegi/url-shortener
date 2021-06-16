import mongoose from "mongoose";
import config from "../config/config";

function connect() {
  const dbUri = config.dbUri;

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.error("DB error", error);
      process.exit(1);
    });
}

export default connect;
