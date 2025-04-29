import React from "react";

import logo from '../assets/images/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4 border-t justify-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
        <div className="flex items-center space-x-3 mb-3 sm:mb-0">
          <img src={logo} alt="Company Logo" className="h-10" />
          <span className="text-gray-600 text-sm">G.NIOOS © 2021</span>
        </div>

        <nav
          className="flex flex-wrap justify-center sm:justify-start space-x-6 text-sm text-gray-600"
          aria-label="Footer Navigation"
        >
          <ul className="flex flex-wrap space-x-4 justify-center">
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-gray-400">
                Support members
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-gray-400">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-gray-400">
                Conditions d'utilisations
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-gray-400">
                G.nioos recrute
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-gray-400">
                Données personnelles
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
