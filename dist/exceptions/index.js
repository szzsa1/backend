"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorException = exports.NotFoundException = exports.UnauthorizedException = exports.BadRequestException = void 0;
const HttpException_1 = require("./HttpException");
class BadRequestException extends HttpException_1.HttpException {
    constructor(message = "Bad Request") {
        super(400, message);
    }
}
exports.BadRequestException = BadRequestException;
class UnauthorizedException extends HttpException_1.HttpException {
    constructor(message = "Unauthorized") {
        super(401, message);
    }
}
exports.UnauthorizedException = UnauthorizedException;
class NotFoundException extends HttpException_1.HttpException {
    constructor(message = "Not Found") {
        super(404, message);
    }
}
exports.NotFoundException = NotFoundException;
class InternalServerErrorException extends HttpException_1.HttpException {
    constructor(message = "Internal Server Error") {
        super(500, message);
    }
}
exports.InternalServerErrorException = InternalServerErrorException;
