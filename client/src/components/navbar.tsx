import { useScroll } from "../hooks/use-scroll";
import { BookOpen } from "./icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  const scrolled = useScroll(50);

  return (
    <div
      className={`fixed top-0 flex w-full justify-center ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >
      <div className="mx-5 flex h-16 w-full max-w-screen-lg items-center justify-between">

        <Link to="/" className="relative flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-gray-800" />
          <span className="text-lg font-bold text-gray-800">
            Medium Crawler
          </span>
        </Link>
      </div>
    </div>
  );
}
