import { DocumentDefinition, _AllowStringsForIds } from "mongoose";
import Url, { UrlDocument } from "../model/url.model";
import config from "../config/config";

const BASE_URI = `http://${config.server.hostname}:${config.server.port}`;

async function generateShortUrl(
  input: DocumentDefinition<UrlDocument>
): Promise<string> {
  const existingUrl: UrlDocument = await Url.findOne({
    longUrl: input.longUrl,
  }).exec();

  let shortUrl = "";

  if (existingUrl === null) {
    const newUrl = new Url({ longUrl: input.longUrl });

    const generatedUrl: UrlDocument = await newUrl.save();

    shortUrl = generatedUrl.shortUrl;
  } else {
    shortUrl = existingUrl.shortUrl;
  }

  return `${BASE_URI}/${shortUrl}`;
}

async function getLongUrl(input: string): Promise<UrlDocument> {
  const url: UrlDocument = await Url.findOne({
    shortUrl: input,
  }).exec();

  return url;
}

export { generateShortUrl, getLongUrl };
