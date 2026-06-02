
interface MainProps {
  layout: string;
}

export default function Main({ layout }: MainProps) {
  return (
    <main className={layout}>
    <h1>Main</h1>
    </main>
  );
}