"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogUpdate = exports.blogInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    name: zod_1.default.string().optional(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8)
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8)
});
exports.blogInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string()
});
exports.blogUpdate = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.string()
});
