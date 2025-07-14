import { useTheme } from "../context/theme-provider";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import '../App.css'

const Header = () => {
  const { theme, setTheme } = useTheme();

  const nextTheme = theme === "dark" ? "light" : "dark";
  const logoSrc = theme === "dark" ? "/logo.png" : "/logo2.png";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/">
          <img src={logoSrc} alt="logo" className="h-16" />
        </Link>

        <div>
          <Button onClick={() => setTheme(nextTheme)} variant="ghost">
            Toggle
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
