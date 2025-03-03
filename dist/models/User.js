"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.prisma = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.prisma = prisma;
// Zod schema for validation
const userSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
});
exports.userSchema = userSchema;
