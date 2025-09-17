import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

    const [active, setActive] = useState("home");

     // Scroll listener for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      let current = "home";

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/70 dark:bg-[#1a1a1a]/90 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide text-gray-900 dark:text-white">
          Karin<span className="text-primary">.</span>
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.toLowerCase())?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
               className={`transition-colors duration-300 font-medium ${
    active === item.toLowerCase()
      ? "text-primary" // active link style
      : "text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
  }`}
            >
              {item}
            </a>
          ))}

          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
