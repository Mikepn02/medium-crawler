"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchHTML = void 0;
const axios_1 = __importDefault(require("axios"));
const fetchHTML = async (url) => {
    const { data } = await axios_1.default.get(url);
    return data;
};
exports.fetchHTML = fetchHTML;
