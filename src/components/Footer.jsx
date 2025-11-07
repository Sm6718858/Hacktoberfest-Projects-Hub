import React from "react";
import Logo from "../assets/logo_github_project_hub.png";

const footerLinks = [
  {
    label: "GitHub",
    url: "https://github.com/Pinaka-Pani-18/Hacktoberfest-Projects-Hub",
  },
  {
    label: "Contributing",
    url: "https://github.com/Pinaka-Pani-18/Hacktoberfest-Projects-Hub/blob/main/CONTRIBUTING.md",
  },
  {
    label: "Contact",
    url: "https://github.com/Pinaka-Pani-18/Hacktoberfest-Projects-Hub/issues/new/choose",
  },
  {
    label: "Privacy Policy",
    url: "https://github.com/Pinaka-Pani-18/Hacktoberfest-Projects-Hub/blob/main/LICENSE",
  },
  {
    label: "Terms of Service",
    url: "https://github.com/Pinaka-Pani-18/Hacktoberfest-Projects-Hub/blob/main/CODE_OF_CONDUCT.md",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-300 py-7 mt-auto w-full border-t border-gray-700">

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">

        <img
          src={Logo}
          alt="GitHub Project Hub Logo"
          className="w-20 mb-4 md:mb-0"
        />

        <ul className="flex flex-wrap justify-center md:justify-end gap-5 text-lg">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-center mt-5 text-sm opacity-80">
        &copy; {new Date().getFullYear()} Hacktoberfest Projects Hub. All rights reserved.
      </p>

    </footer>
  );
};
