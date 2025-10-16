import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { fetchArticles } from "@/api/medium";
import type { Article } from "@/api/medium";

export function useArticles(initialUsername = "") {
  const [username, setUsername] = useState(initialUsername);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [debouncedUsername] = useDebounce(username, 400);

  useEffect(() => {
    if (!debouncedUsername) {
      setArticles([]);
      return;
    }

    const controller = new AbortController();
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchArticles(debouncedUsername);
        setArticles(data);
      } catch (e) {
        setError("Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };
    load();

    return () => controller.abort();
  }, [debouncedUsername]);

  return { username, setUsername, articles, loading, error };
}
