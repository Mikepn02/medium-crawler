import React from "react";
import Footer from "../Footer";
import Navbar from "@/components/navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Main content grows to fill space */}
      <main className="flex-grow w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-16">
        <div className="mx-auto w-full max-w-screen-lg">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
