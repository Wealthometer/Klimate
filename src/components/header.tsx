"use client"

import { useTheme } from "../hooks/use-theme"
import { Link } from "react-router-dom"
import { Moon, Sun } from "lucide-react"

const Header = () => {
  const { theme, setTheme } = useTheme()

  // Get the actual applied theme (resolve "system" to actual theme)
  const getAppliedTheme = () => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return theme
  }

  const appliedTheme = getAppliedTheme()
  const isDark = appliedTheme === "dark"

  const toggleTheme = () => {
    if (theme === "system") {
      // If currently system, switch to the opposite of what's currently applied
      setTheme(isDark ? "light" : "dark")
    } else {
      // If currently light or dark, switch to the opposite
      setTheme(isDark ? "light" : "dark")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/">
          <img src={isDark ? "/logo.png" : "/logo2.png"} alt="logo" className="h-16" />
        </Link>

        <div>
          <button
            onClick={toggleTheme}
            className={`flex items-center cursor-pointer transition-transform duration-500 hover:scale-110 ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Moon className="h-6 w-6 text-blue-500 transition-all duration-300 rotate-0" />
            ) : (
              <Sun className="h-6 w-6 text-yellow-500 transition-all duration-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
