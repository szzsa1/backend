"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const logger_1 = __importDefault(require("../utils/logger"));
const prisma = new client_1.PrismaClient();
class UserService {
    /**
     * Create a new user
     * @param data  - User data: { name: string, email: string }
     * @returns     - The created user
     */
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield prisma.user.create({ data });
                return user;
            }
            catch (error) {
                logger_1.default.error(`Error creating user: ${error}`);
                throw new Error("Failed to create user");
            }
        });
    }
    /**
     * Retrieve all users
     * @returns - List of users
     */
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield prisma.user.findMany();
                return users;
            }
            catch (error) {
                logger_1.default.error(`Error fetching users: ${error}`);
                throw new Error("Failed to fetch users");
            }
        });
    }
    /**
     * Retrieve a user by ID
     * @param id  - User ID
     * @returns   - The user with the specified ID
     */
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield prisma.user.findUnique({ where: { id } });
                if (!user) {
                    throw new Error("User not found");
                }
                return user;
            }
            catch (error) {
                logger_1.default.error(`Error fetching user: ${error}`);
                throw new Error("Failed to fetch user");
            }
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield prisma.user.findUnique({ where: { email } });
                if (!user) {
                    throw new Error("User not found");
                }
                return user;
            }
            catch (error) {
                logger_1.default.error(`Error fetching user: ${error}`);
                throw new Error("Failed to fetch user");
            }
        });
    }
    /**
     * Update a user by ID
     * @param id  - User ID
     * @param data  - User data: { name: string, email: string }
     * @returns   - The updated user
     */
    updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield prisma.user.update({
                    where: { id },
                    data,
                });
                logger_1.default.info(`User updated: ${JSON.stringify(user)}`);
                return user;
            }
            catch (error) {
                logger_1.default.error(`Error updating user: ${error}`);
                throw new Error("Failed to update user");
            }
        });
    }
    /**
     * Delete a user by ID
     * @param id - User ID
     */
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.user.delete({ where: { id } });
                logger_1.default.info(`User deleted: ${id}`);
            }
            catch (error) {
                logger_1.default.error(`Error deleting user: ${error}`);
                throw new Error("Failed to delete user");
            }
        });
    }
}
exports.default = new UserService();
