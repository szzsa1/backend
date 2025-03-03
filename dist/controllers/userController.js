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
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const userService_1 = __importDefault(require("../services/userService"));
const User_1 = require("../models/User");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = User_1.userSchema.parse(req.body);
        if (!name || !email) {
            throw new Error("Name and email are required");
        }
        if (yield userService_1.default.getUserByEmail(email)) {
            throw new Error("Email already in use");
        }
        const user = yield userService_1.default.createUser({ name, email });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userService_1.default.getUsers();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield userService_1.default.getUserById(parseInt(id));
        res.json(user);
    }
    catch (error) {
        res.status(404).json({ error });
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, email } = User_1.userSchema.parse(req.body);
        const user = yield userService_1.default.updateUser(parseInt(id), { name, email });
        res.json(user);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield userService_1.default.deleteUser(parseInt(id));
        res.status(204).send();
    }
    catch (error) {
        res.status(404).json({ error });
    }
});
exports.deleteUser = deleteUser;
