import { Request, Response, NextFunction } from "express";
import { UrlDocument } from "../model/url.model";
import { generateShortUrl, getLongUrl } from "../services/urlService";

const createShortUrl = async (req: Request, res: Response) => {
  const result = await generateShortUrl(req.body);

  return res.status(201).json({ result });
};

const redirectToLongUrl = async (req: Request, res: Response) => {
  const Url: UrlDocument = await getLongUrl(req.params.shortUrl);

  if (Url === null) {
    const error = new Error("not found");
    res.status(404).json({ message: error.message });
  }

  res.redirect(Url.longUrl);
};

export default { createShortUrl, redirectToLongUrl };
