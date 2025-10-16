import React from "react";
import type { Article } from "@/api/medium";
export default function ArticleCard({ article }: { article: Article }) {
    return (
        <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white  shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
        >
            <div className="p-6">
                <h2 className="font-display text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-blue-600">
                    {article.title}
                </h2>
                <div className="mt-3 flex items-center text-sm text-gray-500">
                    <span className="font-medium text-gray-700">{article.author}</span>
                    {article.pubDate && (
                        <>
                            <span className="mx-2">•</span>
                            <time className="text-gray-500">
                                {new Date(article.pubDate).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </time>
                        </>
                    )}
                </div>
                {article.preview && (
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
                        {article.preview}
                    </p>
                )}
                {article.categories && article.categories.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {article.categories.slice(0, 3).map((cat) => (
                            <span
                                key={cat}
                                className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                            >
                                {cat}
                            </span>
                        ))}
                        {article.categories.length > 3 && (
                            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                +{article.categories.length - 3}
                            </span>
                        )}
                    </div>
                )}
                <div className="mt-5 flex items-center text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-700">
                    Read article
                    <svg
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </a>
    );
}