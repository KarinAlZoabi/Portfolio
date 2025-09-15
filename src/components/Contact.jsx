import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="px-4 py-16 bg-gradient-to-b from-background to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

      {/* Contact Info */}
      <div className="space-y-3 text-center text-gray-600 dark:text-gray-300">
        <p>Email me at:</p>
        <a
          href="mailto:karin@example.com"
          className="text-lg font-medium hover:text-primary transition-colors"
        >
          karin@example.com
        </a>
        <p>Or find me on:</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <Github className="w-7 h-7" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <Linkedin className="w-7 h-7" />
        </a>
        <a
          href="mailto:karin@example.com"
          className="hover:text-blue-500 transition-colors"
        >
          <Mail className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
