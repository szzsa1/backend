import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions/HttpException";
import logger from "../utils/logger";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpException) {
    res.status(err.status).json({ error: err.message });
  } else {
    logger.error(`Unexpected error: ${err.stack}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { errorHandler };
