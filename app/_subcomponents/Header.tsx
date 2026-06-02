"use client";

import React, { useState, useEffect } from "react";

type Theme = "light" | "dark";

interface HeaderProps {
  layout: string;
}

export default function Header({ layout }: HeaderProps) {
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
    <header className={layout}>
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          I Grade Walls
        </h1>
        
        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode}
          type="button"
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
