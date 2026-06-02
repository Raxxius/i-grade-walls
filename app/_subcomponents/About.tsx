
interface AboutProps {
  layout: string;
}

export default function About({ layout }: AboutProps) {
  return (
    <section className={layout}>
      <div>About</div>
    </section>
  );
}