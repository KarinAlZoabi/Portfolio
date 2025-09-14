import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import FinisherBackground from "./components/FinisherBackground";
export default function App() {
  return (
    <div className="min-h-screen bg-background text-textLight dark:bg-white dark:text-textDark transition-colors duration-500">
           <FinisherBackground />
      {/* Add a z-index to your content to place it on top */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
      </div>

    </div>
  );
}
