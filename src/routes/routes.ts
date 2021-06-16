import express from "express";
import shortUrlsController from "../controllers/urlsController";

const router = express.Router();

router.post("/", shortUrlsController.createShortUrl);
router.get("/:shortUrl", shortUrlsController.redirectToLongUrl);

export = router;
