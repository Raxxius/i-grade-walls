
interface AboutProps {
  layout: string;
}

export default function About({ layout }: AboutProps) {
  return (
    <section className={layout}>
      <h1>About</h1>
      <p>A blog about a middling climbers reviews of climbing walls around the UK</p>
      <p>With a holistic approach to reviewing</p>
      <p>Also with my wingman Max</p>
    </section>
  );
}