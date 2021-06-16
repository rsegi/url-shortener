import mongoose from "mongoose";
import shortid from "shortid";

export interface UrlDocument extends mongoose.Document {
  longUrl: string;
  shortUrl: string;
}

const UrlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true, unique: true },
  shortUrl: { type: String, required: true, default: () => shortid.generate() },
});

const Url = mongoose.model("Url", UrlSchema);

export default Url;
