"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMediumArticles = void 0;
const medium_service_1 = require("../services/medium.service");
const fetchMediumArticles = async (req, res) => {
    try {
        const { username } = req.params;
        if (!username)
            return res.status(400).json({ message: 'Username is required' });
        const articles = await (0, medium_service_1.getArticles)(username);
        res.json({ articles });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.fetchMediumArticles = fetchMediumArticles;
