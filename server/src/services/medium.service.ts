// Solution 4: Use rss-parser library (RECOMMENDED - handles headers automatically)

import Parser from 'rss-parser';
import { Article } from '../types/article';

// Custom type for Medium RSS items
interface MediumRSSItem {
  title?: string;
  link?: string;
  pubDate?: string;
  creator?: string;
  content?: string;
  contentSnippet?: string;
  categories?: string[];
  'dc:creator'?: string;
  'content:encoded'?: string;
}

export const getArticles = async (username: string): Promise<Article[]> => {
  const url = `https://medium.com/feed/@${username}`;
  console.log(url)
  const parser = new Parser<{}, MediumRSSItem>({
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
    
    const articles: Article[] = feed.items.map((item) => {
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
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch RSS feed: ${error.message}`);
    }
    throw error;
  }
};

// Install: npm install rss-parser
// For TypeScript: npm install --save-dev @types/rss-parser