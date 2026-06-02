import DarkMode from "./DarkMode";

interface HeaderProps {
  layout: string;
}

export default function Header({ layout }: HeaderProps) {
  return (
    <header className={layout}>
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          I Grade Walls
        </h1>
        <DarkMode />
      </div>
    </header>
  );
}
