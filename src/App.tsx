import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  const [loading, setLoading] = useState(true);

  if (window.location.pathname !== "/") {
    return <NotFound />;
  }

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="min-h-screen bg-[#050816] text-slate-200">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Journey />
          <Projects />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;