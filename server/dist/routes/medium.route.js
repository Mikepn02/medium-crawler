"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medium_controller_1 = require("../controllers/medium.controller");
const router = (0, express_1.Router)();
router.get('/:username', medium_controller_1.fetchMediumArticles);
exports.default = router;
