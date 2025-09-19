import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="px-4 py-16 bg-gradient-to-b from-background to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
        Get in Touch
      </h2>

      {/* Contact Info */}
      <div className="space-y-3 text-center text-gray-600 dark:text-gray-300">
        <p>Email me at:</p>
        <a
          href="mailto:karinalzoabi15@gmail.com"
          className="text-lg font-medium hover:text-primary transition-colors dark:text-gray-200"
        >
          karinalzoabi15@gmail.com
        </a>
        <p>Or find me on:</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-6 dark:text-gray-200">
        <a
          href="https://github.com/KarinAlZoabi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <Github className="w-7 h-7" />
        </a>
        <a
          href="www.linkedin.com/in/karin-alzoabi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <Linkedin className="w-7 h-7" />
        </a>
        <a
          href="mailto:karinalzoabi15@gmail.com"
          className="hover:text-primary transition-colors"
        >
          <Mail className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
