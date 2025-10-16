"use client";
import { useState } from "react";

import { Background } from "@/components/background";
import { BookOpen } from "@/components/icons";
import { MainLayout } from "@/components/layout/MainLayout";
import SearchBar from "@/components/ui/search-bar";
import ArticleCard from "@/components/ArticleCard";
import type { Article } from "@/api/medium";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  return (
    <>
      <Background />
      <MainLayout>
        <div className="relative z-10 mx-auto w-full max-w-xl px-5 py-10 xl:px-0">
          <div
            className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-7 py-2 transition-colors hover:bg-gray-50"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <BookOpen className="text-sm h-5 w-5 text-gray-600" />
            <p className="text-sm font-semibold text-gray-600">
              Medium Crawler Demo
            </p>
          </div>

          <h1
            className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-6xl md:leading-[1.1]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            Browse Medium Articles
          </h1>

          <p
            className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Enter a Medium username to fetch their latest articles.
          </p>

          <div
            className="mx-auto mt-10 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <SearchBar onResults={setArticles} />
          </div>

      
        </div>
      </MainLayout>
    </>
  );
}
