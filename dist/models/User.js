"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    created_at: { type: String, required: true, default: new Date() },
    updated_at: { type: String, required: true, default: new Date() },
});
exports.default = (0, mongoose_1.model)('users', userSchema);
