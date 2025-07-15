import { useTheme } from "../context/use theme";
import { Link } from "react-router-dom";
// import { Button } from "./ui/button";
import '../App.css'
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/">
          <img src={isDark ? "/logo.png" : "/logo2.png"} alt="logo" className="h-16" />
        </Link>

        <div>
          <div className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? "-rotate-180" : "rotate-0"}`} onClick={() => setTheme(isDark ? "dark" : "light")}>
            {isDark ? (<Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all"/>) : (<Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all"/>)}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
