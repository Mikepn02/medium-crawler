


export interface Article {
  id?: string;
  title: string;
  description?: string;
  link: string;
  pubDate?: string;
  author?: string;
  thumbnail?: string;
  preview?: string;
  categories?: string[];
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

/**
 * Fetches Medium articles for a given username.
 */
export const fetchArticles = async (username: string): Promise<Article[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/medium/${username}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }

    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error("Error fetching Medium articles:", error);
    throw error;
  }
};
