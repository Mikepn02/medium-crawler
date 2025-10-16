"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticles = void 0;
const rss_parser_1 = __importDefault(require("rss-parser"));
const getArticles = async (username) => {
    const url = `https://medium.com/feed/@${username}`;
    console.log(url);
    const parser = new rss_parser_1.default({
        customFields: {
            item: [
                ['dc:creator', 'creator'],
                ['content:encoded', 'content']
            ]
        },
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'application/rss+xml, application/xml'
        },
        timeout: 10000
    });
    try {
        const feed = await parser.parseURL(url);
        const articles = feed.items.map((item) => {
            // Extract plain text preview from content
            let preview = item.contentSnippet || '';
            if (!preview && item.content) {
                // Strip HTML tags manually
                preview = item.content.replace(/<[^>]*>/g, '').substring(0, 200).trim();
            }
            return {
                title: item.title || '',
                link: item.link || '',
                pubDate: item.pubDate,
                author: item.creator || item['dc:creator'],
                preview: preview || undefined,
                categories: item.categories || undefined
            };
        }).filter(article => article.title && article.link);
        return articles;
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to fetch RSS feed: ${error.message}`);
        }
        throw error;
    }
};
exports.getArticles = getArticles;
