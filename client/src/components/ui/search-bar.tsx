"use client";
import { Link2, FileQuestion } from "lucide-react";
import { Command } from "cmdk";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "../icons";
import { useArticles } from "@/hooks/use-article";

interface Props {
  initialUsername?: string;
  onResults?: (articles: any[]) => void;
}

export default function SearchBar({
  initialUsername = "hamipirzada",
  onResults,
}: Props) {
  const { username, setUsername, articles, loading, error } =
    useArticles(initialUsername);

  // Pass results to parent if provided
  if (onResults) onResults(articles);

  const showEmptyState = !loading && !error && username && articles.length === 0;

  return (
    <div className="w-full max-w-lg">
      <Command className="peer relative w-full" loop shouldFilter={false}>
        {/* Icon on the left */}
        <div className="absolute inset-y-0 left-3 mt-3 text-gray-400">
          {loading ? <LoadingSpinner className="h-4" /> : <Link2 className="h-4" />}
        </div>

        {/* Input field */}
        <Command.Input
          name="username"
          id="username"
          className="block w-full rounded-lg border border-gray-300 h-11 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all"
          placeholder="Search Medium username"
          value={username}
          onValueChange={setUsername}
        />

        {/* {error && <p className="mt-2 text-xs text-red-500 text-center">{error}</p>} */}
        {showEmptyState && (
          <div className="absolute z-10 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
            <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
              <FileQuestion className="h-12 w-12 text-gray-300 mb-3" />
              <p className="text-sm font-medium text-gray-900 mb-1">
                No articles found
              </p>
              <p className="text-xs text-gray-500">
                We couldn't find any articles for "@{username}"
              </p>
            </div>
          </div>
        )}

    
        {articles.length > 0 && (
          <Command.List
            className={cn(
              "absolute z-10 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-200",
              articles.length > 3 ? "max-h-80 overflow-auto" : "max-h-full"
            )}
          >
            <div className="p-2 space-y-1">
              {articles.map((item) => (
                <Command.Item
                  key={item.link}
                  value={item.title || ""}
                  onSelect={() => window.open(item.link, "_blank")}
                  className="group flex cursor-pointer flex-col rounded-md px-3 py-3 text-sm text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <p className="font-semibold text-gray-900 line-clamp-1">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.author}{" "}
                    {item.pubDate &&
                      `• ${new Date(item.pubDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}`}
                  </p>
                  {item.preview && (
                    <p className="text-xs text-gray-600 mt-1.5 line-clamp-2">{item.preview}</p>
                  )}
                </Command.Item>
              ))}
            </div>
          </Command.List>
        )}
      </Command>
    </div>
  );
}