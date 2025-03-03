"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger"));
const loggingMiddleware = (req, res, next) => {
    logger_1.default.info(`${req.method} ${req.url}`);
    res.on("finish", () => {
        logger_1.default.info(`${req.method} ${req.url} - ${res.statusCode} ${res.statusMessage}`);
    });
    next();
};
exports.default = loggingMiddleware;
