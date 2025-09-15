// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="text-center py-4 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      © {new Date().getFullYear()} Karin Al Zoabi. All rights reserved.
    </footer>
  );
}
