"use client"

import { useTheme } from "../hooks/use-theme"
import { Moon, Sun, Monitor } from "lucide-react"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const getAppliedTheme = () => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return theme
  }

  const appliedTheme = getAppliedTheme()
  const isDark = appliedTheme === "dark"

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="h-5 w-5 text-blue-400 transition-all duration-300" />
    }
    return isDark ? (
      <Moon className="h-5 w-5 text-blue-500 transition-all duration-300" />
    ) : (
      <Sun className="h-5 w-5 text-yellow-500 transition-all duration-300" />
    )
  }

  return (
    <button
      onClick={cycleTheme}
      className={`flex items-center justify-center p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-accent hover:scale-110 ${
        isDark ? "rotate-180" : "rotate-0"
      }`}
      aria-label={`Current theme: ${theme}. Click to cycle themes.`}
      title={`Current: ${theme} theme`}
    >
      {getIcon()}
    </button>
  )
}

export default ThemeToggle
