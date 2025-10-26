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




// // src/components/Projects.jsx
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Project One",
//     description: "A short description of your project goes here.",
//     image: "https://via.placeholder.com/600x400", // Replace with your screenshot
//     link: "#",
//   },
//   {
//     title: "Project Two",
//     description: "Another project description placeholder.",
//     image: "https://via.placeholder.com/600x400",
//     link: "#",
//   },
//   {
//     title: "Project Three",
//     description: "Yet another cool project you worked on.",
//     image: "https://via.placeholder.com/600x400",
//     link: "#",
//   },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
//     >
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Section Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold mb-12"
//         >
//           Projects
//         </motion.h2>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//               className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-xl transition"
//             >
//               {/* Project Image */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />

//               {/* Content */}
//               <div className="p-6 text-left">
//                 <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   {project.description}
//                 </p>
//                 <a
//                   href={project.link}
//                   className="text-primary font-medium hover:underline"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//no images

// src/components/Projects.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";


const projects = [
  {
    title: "ASDetector",
    description:
      "A full-stack mobile application that allows parent users to perform preliminary autism diagnosis on their children. It also allows them to read articles, watch videos, and contact professionals. Professional users are able to read articles, watch videos and interact with parents. It also includes a game to enhace children's cognitive skills.",
    tech: [
      "React Native",
      "JavaScript",
      "Tailwind",
      "Python",
      "Firebase",
      "Machine Learning",
    ],
    github: "https://github.com/danad1821/FYP",
    demo: "https://studentsrhuedu-my.sharepoint.com/personal/alzoabikm_students_rhu_edu_lb/_layouts/15/stream.aspx?id=%2Fpersonal%2Falzoabikm%5Fstudents%5Frhu%5Fedu%5Flb%2FDocuments%2FFYP%20DEMO%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&ga=1",
    images: [
      "Images/homePic.jpg",
      "Images/DiagnosisPic.jpg",
      "Images/ArticlesPic.jpg",
      "Images/ColorThemes.jpg",
      "Images/HomePink.jpg"
    ],
    link: "#",
    date: "2025-08",
  },
  {
    title: "Project Two",
    description:
      "Another project description placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tech: ["React", "Tailwind"],
    github: "#",
    demo: "#",
    images: [],
    link: "#",
    date: "2025-06",
  },
  {
    title: "Project Three",
    description: "Yet another cool project you worked on.",
    tech: ["React", "Tailwind"],
    github: "#",
    demo: "#",
    images: [],
    link: "#",
    date: "2024-12",
  },
  {
    title: "Project Three",
    description: "Yet another cool project you worked on.",
    tech: ["React", "Tailwind"],
    github: "#",
    demo: "#",
    images: [],
    link: "#",
    date: "2024-01",
  },
];

// Sort newest to oldest
const sortedProjects = [...projects].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Pagination calculations
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = sortedProjects.slice(indexOfFirst, indexOfLast);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              // Add flexbox classes here
              className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-xl transition flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description.length > 90
                  ? project.description.slice(0, 90) + "..."
                  : project.description}
              </p>
              <a
                // Add mt-auto to push the link to the bottom
                className="text-primary font-medium hover:underline mt-auto"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      {/* AnimatePresence for smooth close */}
      <AnimatePresence>
        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function Modal({ project, onClose }) {
  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0); // reset to first image when opening a new project
  }, [project]);

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-2xl"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        {project.tech && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Tech Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <div className="mb-4 relative flex flex-col items-center">
            <motion.img
              key={currentImage}
              src={project.images[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className="mx-auto rounded-lg max-h-64 w-auto object-contain bg-gray-100"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            />

            {/* Prev / Next buttons */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage((prev) =>
                      prev === 0 ? project.images.length - 1 : prev - 1
                    );
                  }}
                 className="absolute top-1/2 left-7 -translate-y-1/2 bg-black bg-opacity-50 h-12 px-4 text-white rounded-full hover:bg-opacity-70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage((prev) =>
                      prev === project.images.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="absolute top-1/2 right-7 -translate-y-1/2 bg-black bg-opacity-50 h-12 px-4 text-white rounded-full hover:bg-opacity-70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Dots */}
            {project.images.length > 1 && (
              <div className="flex justify-center mt-2 gap-2">
                {project.images.map((_, i) => (
                  <span
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(i);
                    }}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      i === currentImage ? "bg-primary" : "bg-gray-400"
                    }`}
                  ></span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
            >
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
