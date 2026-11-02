export default function Hero() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-24">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Build Your Ideal <br />
          <span className="text-brand">Development Stack</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#technologies" className="bg-brand rounded-lg px-5 py-3 text-sm font-semibold text-white shadow">
            Explore Technologies
          </a>
          <a href="#contact" className="rounded-lg border border-slate-300 px-8 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Learn More
          </a>
        </div>
      </div>
      <img src="/images/banner-stack.png" alt="Layered development stack illustration" className="mx-auto w-full max-w-md md:max-w-lg" />
    </section>
  );
}
