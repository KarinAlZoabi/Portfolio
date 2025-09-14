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
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A short description of your project goes here.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Another project description placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "Yet another cool project you worked on.",
    link: "#",
  },
];

export default function Projects() {
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              // Add flexbox classes here
              className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-xl transition flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                // Add mt-auto to push the link to the bottom
                className="text-primary font-medium hover:underline mt-auto"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}