import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechCard from "./components/TechCard.jsx";
import YourStack from "./components/YourStack.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  // Load the technology data from the JSON file
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch(() => toast.error("Failed to load technologies"))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const handleRemove = (id) => {
    const tech = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${tech.name} removed from your stack`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed from your stack");
  };

  return (
    <>
      <Navbar />
      <Hero />
      <section id="technologies" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-20 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Explore the <span className="text-brand">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-500">Pick one technology per category to build your ideal stack.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_300px]">
          {loading ? (
            <div className="flex items-center justify-center gap-3 py-20 text-slate-500">
              <span className="h-6 w-6 animate-spin rounded-full border-4 border-pink-200 border-t-pink-500" />
              Loading technologies...
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  added={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>
          )}
          <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
        </div>
      </section>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}
