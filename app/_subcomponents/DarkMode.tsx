"use client";

import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

export default function DarkMode() {
  const toggleDarkMode = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");

    document.documentElement.classList.toggle("dark", nextIsDark);
    document.documentElement.classList.toggle("light", !nextIsDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      type="button"
      className="ml-4 rounded-full bg-gray-200 p-2 transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:hover:bg-gray-600"
      aria-label="Toggle dark mode"
    >
      <SunIcon className="hidden h-5 w-5 text-yellow-400 dark:block" />
      <MoonIcon className="h-5 w-5 text-gray-700 dark:hidden" />
    </button>
  );
}
