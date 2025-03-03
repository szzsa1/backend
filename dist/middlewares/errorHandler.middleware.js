"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const HttpException_1 = require("../exceptions/HttpException");
const logger_1 = __importDefault(require("../utils/logger"));
const errorHandler = (err, req, res, next) => {
    if (err instanceof HttpException_1.HttpException) {
        res.status(err.status).json({ error: err.message });
    }
    else {
        logger_1.default.error(`Unexpected error: ${err.stack}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.errorHandler = errorHandler;
