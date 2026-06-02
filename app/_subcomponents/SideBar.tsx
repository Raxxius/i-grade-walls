
interface SideBarProps {
  layout: string;
}

export default function SideBar({ layout }: SideBarProps) {
  return (
    <section className={layout}>
      <h1>Sidebar</h1>
    </section>
  );
}