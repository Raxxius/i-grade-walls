"use client";

import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

type Theme = "light" | "dark";

export default function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (theme: Theme, persist = false) => {
      root.classList.toggle("dark", theme === "dark");
      root.classList.toggle("light", theme === "light");
      setIsDark(theme === "dark");

      if (persist) {
        localStorage.setItem("theme", theme);
      }
    };

    applyTheme(storedTheme ?? (systemThemeQuery.matches ? "dark" : "light"));

    const syncSystemTheme = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(event.matches ? "dark" : "light");
      }
    };

    systemThemeQuery.addEventListener("change", syncSystemTheme);

    return () => {
      systemThemeQuery.removeEventListener("change", syncSystemTheme);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const nextTheme = prev ? "light" : "dark";
      const root = document.documentElement;

      root.classList.toggle("dark", nextTheme === "dark");
      root.classList.toggle("light", nextTheme === "light");
      localStorage.setItem("theme", nextTheme);

      return nextTheme === "dark";
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      type="button"
      className="ml-4 rounded-full bg-gray-200 p-2 transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:hover:bg-gray-600"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <SunIcon className="h-5 w-5 text-yellow-400" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
}
