import { useState, useEffect } from "react";
import { Github, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Internship Project",
      description:
        "A 10-phase internship project where I built a complete client and phone number management system using ASP.NET WebAPI, AngularJS, ADO.NET, and SQL Server.",
      tech: ["ASP.NET", "AngularJS", "SQL Server", "C#"],
      link: "https://github.com/example",
      demo: "#",
      images: ["/internship1.png", "/internship2.png"],
      date: "2025",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio built with React, TailwindCSS, and modern UI practices. Showcases my projects, skills, and journey.",
      tech: ["React", "TailwindCSS", "Vite"],
      link: "https://github.com/example",
      demo: "#",
      images: ["/portfolio1.png"],
      date: "2025",
    },
    {
      title: "Another Project",
      description:
        "An experimental project where I explored animations, modern layouts, and reusable components.",
      tech: ["React", "Framer Motion"],
      link: "https://github.com/example",
      demo: "#",
      images: ["/another.png"],
      date: "2024",
    },
     {
      title: "Another Project",
      description:
        "An experimental project where I explored animations, modern layouts, and reusable components.",
      tech: ["React", "Framer Motion"],
      link: "https://github.com/example",
      demo: "#",
      images: ["/another.png"],
      date: "2024",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  // Escape key closes modal
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight" && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev + 1) % projects.length);
      }
      if (e.key === "ArrowLeft" && selectedIndex !== null) {
        setSelectedIndex(
          (prev) => (prev - 1 + projects.length) % projects.length
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, projects.length]);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Projects
        </h2>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="flex flex-col justify-between border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group p-6 rounded-xl bg-white dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-primary">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                {project.description}
              </p>

              {/* Tech stack as badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer with date */}
              <div className="flex justify-end mt-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {project.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-4xl w-full overflow-hidden relative">
              {/* Hero image if available */}
              {projects[selectedIndex].images?.length > 0 && (
                <img
                  src={projects[selectedIndex].images[0]}
                  alt={projects[selectedIndex].title}
                  className="w-full h-60 object-cover"
                />
              )}

              {/* Two-column layout */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    {projects[selectedIndex].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {projects[selectedIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedIndex].tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={projects[selectedIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
                    >
                      <Github size={18} /> GitHub
                    </a>
                    <a
                      href={projects[selectedIndex].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + projects.length) % projects.length
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow hover:bg-white dark:hover:bg-gray-800"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % projects.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow hover:bg-white dark:hover:bg-gray-800"
              >
                <ArrowRight size={20} />
              </button>

              {/* Close button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-primary"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
