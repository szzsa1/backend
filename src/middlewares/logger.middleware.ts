import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);

  res.on("finish", () => {
    logger.info(
      `${req.method} ${req.url} - ${res.statusCode} ${res.statusMessage}`
    );
  });

  next();
};

export default loggingMiddleware;
