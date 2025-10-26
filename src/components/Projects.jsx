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
    demo: "https://studentsrhuedu-my.sharepoint.com/personal/alzoabikm_students_rhu_edu_lb/_layouts/15/stream.aspx?id=%2Fpersonal%2Falzoabikm%5Fstudents%5Frhu%5Fedu%5Flb%2FDocuments%2FFYP%20DEMO%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUFvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&ga=1",
    images: [
      "Images/ASDetect/homePic.jpg",
      "Images/ASDetect/DiagnosisPic.jpg",
      "Images/ASDetect/ArticlesPic.jpg",
      "Images/ASDetect/ColorThemes.jpg",
      "Images/ASDetect/HomePink.jpg",
    ],
    link: "#",
    date: "2025-04",
  },
  {
    title: "Curl",
    description:
      "Curl is a front-end website that was created in collaboration with graphic designers. It is a mock website for the coffee shop, Curl, located in Badaro, Lebanon. Key features of this website are quote of the day and the community page.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma"],
    github: "https://github.com/danad1821/Curl-Website",
    demo: "https://drive.google.com/file/d/1H3mZ7IUefKEZ7V21XfDJWJKLa6wO6COz/view",
    images: [
      "Images/Curl/HeroSection.png",
      "Images/Curl/About.png",
      "Images/Curl/BestSelling.png",
      "Images/Curl/Quote.png",
      "Images/Curl/Events.png",
      "Images/Curl/Menu.png",
      "Images/Curl/Merch.png",
      "Images/Curl/Community.png",
      "Images/Curl/Reviews.png",
    ],
    link: "#",
    date: "2024-12",
  },
  {
    title: "Sparkle",
    description:
      "Sparkle is a a mock website for a cosmetics brand. It is a full-stack e-commerce website for the imaginary hair products brand Sparkle. ",
    tech: ["PHP", "HTML", "CSS", "PhpMyAdmin", "Bootstrap", "Xampp"],
    github: "#",
    demo: "https://drive.google.com/file/d/1rAu2WEcinEVLwJPbWzXOVrdTYhP1X-5k/view?usp=sharing",
    images: [
      "Images/Sparkle/Hero.png",
      "Images/Sparkle/ProductsHome.png",
      "Images/Sparkle/HairTexture.png",
      "Images/Sparkle/Contact.jpg",
    ],
    link: "#",
    date: "2024-04",
  },
  {
    title: "DAFSA Management Web App",
    description:
      "This web app was designed to enable users to create a Deterministic Acyclic Finite State Automaton (DAFSA) and customize its display. This is because the app includes features that change the colors of the diagram, alter the number of states, and minimize the DAFSA. This project was done for the theory of computation course.",
    tech: ["D3.js", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/danad1821/DAFSA-App",
    demo: "https://github.com/danad1821/DAFSA-App",
    images: ["Images/DAFSA/Home.png"],
    link: "#",
    date: "2024-11",
  },
  {
    title: "UniFlow",
    description:
      "A ReactJs project created to help university students manage their projects and tasks.",
    tech: ["React", "Firebase", "JavaScript", "HTML", "CSS"],
    github: "#",
    demo: "#",
    images: [
      "Images/UniFlow/Landing1.png",
      "Images/UniFlow/Landing2.png",
      "Images/UniFlow/Home.png",
      "Images/UniFlow//Calendar.png",
    ],
    link: "#",
    date: "2024-11",
  },
  {
    title: "Device Manager",
    description:
      "A full-stack website created as part of my software developer internship at Vanrise. This website allows users to manage clients, phone numbers, phone number reservations and view reports about reservation statistics.",
    tech: [
      "AngularJs",
      "SQL",
      "SQL Server",
      "HTML",
      "CSS",
      "ADO.Net",
      "Bootstrap",
      "ASP.NET MVC"
    ],
    github:
      "https://github.com/KarinAlZoabi/InternshipProject-DevicesManager/tree/main",
    demo: "#",
    images: [
      "Images/Internship/Login.png",
      "Images/Internship/Devices.png",
      "Images/Internship/Clients.png",
      "Images/Internship/PhoneNumbers.png",
      "Images/Internship/PhoneNumberReservations.png",
      "Images/Internship/ReportClients.png",
      "Images/Internship/ReportPhone.png",
    ],
    link: "#",
    date: "2025-08",
  },
];

// Sort newest to oldest
const sortedProjects = [...projects].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Image preloading
  useEffect(() => {
    sortedProjects.forEach((project) => {
      project.images.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
      });
    });
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = sortedProjects.slice(indexOfFirst, indexOfLast);

  // Keyboard navigation and modal scroll lock
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedProjectIndex !== null) {
        if (e.key === "Escape") {
          setSelectedProjectIndex(null);
        } else if (e.key === "ArrowRight") {
          setSelectedProjectIndex((prev) => (prev + 1) % sortedProjects.length);
        } else if (e.key === "ArrowLeft") {
          setSelectedProjectIndex(
            (prev) => (prev - 1 + sortedProjects.length) % sortedProjects.length
          );
        }
      }
    };

    if (selectedProjectIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedProjectIndex, sortedProjects.length]);

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
          {currentProjects.map((project, index) => {
            const globalIndex = sortedProjects.indexOf(project);
            const visibleTech = project.tech.slice(0, 2);
            const remainingTechCount = project.tech.length - 3;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-xl transition flex flex-col group cursor-pointer min-h-[250px]"
                onClick={() => setSelectedProjectIndex(globalIndex)}
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  {project.description.length > 90
                    ? project.description.slice(0, 90) + "..."
                    : project.description}
                </p>
                {/* Tech stack badges with wrapping */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {visibleTech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium flex-shrink-0 dark:text-primary dark:bg-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                  {remainingTechCount > 0 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium">
                      +{remainingTechCount} more
                    </span>
                  )}
                </div>
                <a className="text-primary font-medium hover:underline mt-auto">
                  View Project →
                </a>
              </motion.div>
            );
          })}
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
        {selectedProjectIndex !== null && (
          <Modal
            project={sortedProjects[selectedProjectIndex]}
            onClose={() => setSelectedProjectIndex(null)}
            projectIndex={selectedProjectIndex}
            setProjectIndex={setSelectedProjectIndex}
            totalProjects={sortedProjects.length}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function Modal({
  project,
  onClose,
  projectIndex,
  setProjectIndex,
  totalProjects,
}) {
  const [currentImage, setCurrentImage] = useState(0);

  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    setCurrentImage(0); // reset to first image when opening a new project
  }, [project]);

  const nextProject = () => {
    setProjectIndex((prev) => (prev + 1) % totalProjects);
  };

  const prevProject = () => {
    setProjectIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-lg max-w-5xl w-full relative overflow-y-auto max-h-[95vh] shadow-xl "
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-2xl z-20"
        >
          &times;
        </button>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Left Column (Image Slider) */}
          <div className="relative flex flex-col items-center">
            {project.images && project.images.length > 0 && (
              <>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={project.images[currentImage]}
                    alt={`${project.title} screenshot ${currentImage + 1}`}
                    className="mx-auto rounded-lg max-h-96 w-auto object-contain bg-gray-100"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                {/* Prev / Next image buttons */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute top-1/2 left-0 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute top-1/2 right-0 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
                    >
                      <ArrowRight size={20} />
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
                          i === currentImage
                            ? "bg-primary"
                            : "bg-gray-400 dark:bg-gray-600"
                        }`}
                      ></span>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Right Column (Content) */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
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
            {/* Buttons */}
            <div className="flex gap-4 mt-4">
  {/* GitHub Button */}
  {project.github && project.github !== "#" ? (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition flex items-center gap-2"
    >
      <Github size={18} /> GitHub
    </a>
  ) : (
    <button
      disabled
      className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed flex items-center gap-2"
    >
      <Github size={18} /> GitHub
    </button>
  )}

  {/* Demo Button */}
  {project.demo && project.demo !== "#" ? (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition flex items-center gap-2"
    >
      <ExternalLink size={18} /> Live Demo
    </a>
  ) : (
    <button
      disabled
      className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed flex items-center gap-2"
    >
      <ExternalLink size={18} /> Live Demo
    </button>
  )}
</div>

          </div>
        </div>

        {/* Project Navigation Buttons (at the bottom) */}
        <div className="flex justify-center gap-4 px-6 py-4">
          <button
            onClick={prevProject}
            className="px-4 py-2 border border-gray-800 dark:border-white text-gray-800 dark:text-white rounded hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors duration-300 min-w-[170px]"
          >
            ← Previous Project
          </button>
          <button
            onClick={nextProject}
            className="px-4 py-2 border border-gray-800 dark:border-white text-gray-800 dark:text-white rounded hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors duration-300 min-w-[170px]"
          >
            Next Project →
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
