import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from '../assets/images/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu: any) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-gray-100 px-6 lg:px-12 py-4 shadow-sm relative z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center group mr-8">
          <img 
            src={logo}
            alt="G Infos Logo" 
            className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" 
          />
        </div>

        {/* Navigation Desktop */}
        <div className="hidden md:flex space-x-8 font-semibold text-black relative m-auto">
          {/* Newsletter */}
          <div className="relative group">
            <button className="hover:text-black transition flex items-center py-2 px-1 font-bold">
              Newsletter
              <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg w-48 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 border border-gray-100">
              <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">S'inscrire</a>
            </div>
          </div>

          {/* Annuaires */}
          <div className="relative group">
            <button className="hover:text-black transition flex items-center py-2 px-1 font-bold">
              Annuaires
              <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg w-56 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 border border-gray-100">
              <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Professionels du voyage</a>
              <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Tourisme médical</a>
            </div>
          </div>

          {/* Les Services */}
          <div className="relative group">
            <button className="hover:text-black transition flex items-center py-2 px-1 font-bold">
              Les Services
              <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg w-48 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 border border-gray-100">
              <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Forum</a>
              <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Librairie</a>
              <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Echanges milticulturels</a>
              <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Films de voyage</a>
              <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Guides</a>
              <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Plateforme de réservations</a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-black focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu mobile"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col bg-white p-4 rounded-lg shadow-xl border border-gray-100 relative z-50">
          {/* Newsletter */}
          <div className="mb-2">
            <button 
              className="text-black flex justify-between items-center w-full px-4 py-3 rounded-lg hover:bg-gray-50 transition font-bold" 
              onClick={() => toggleDropdown("newsletter")}
            >
              Newsletter
              <ChevronDown 
                size={18} 
                className={`transition-transform ${openDropdown === "newsletter" ? "rotate-180" : ""}`} 
              />
            </button>
            {openDropdown === "newsletter" && (
              <div className="pl-4 mt-1">
                <a href="#" className="block px-4 py-2 text-black font-bold hover:bg-gray-50 transition">S'inscrire</a>
              </div>
            )}
          </div>

          {/* Annuaires */}
          <div className="mb-2">
            <button 
              className="text-black flex justify-between items-center w-full px-4 py-3 rounded-lg hover:bg-gray-50 transition font-bold" 
              onClick={() => toggleDropdown("annuaires")}
            >
              Annuaires
              <ChevronDown 
                size={18} 
                className={`transition-transform ${openDropdown === "annuaires" ? "rotate-180" : ""}`} 
              />
            </button>
            {openDropdown === "annuaires" && (
              <div className="pl-4 mt-1">
                <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Professionels du voyage</a>
                <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Tourisme médical</a>
              </div>
            )}
          </div>

          {/* Les Services */}
          <div>
            <button 
              className="text-black flex justify-between items-center w-full px-4 py-3 rounded-lg hover:bg-gray-50 transition font-bold" 
              onClick={() => toggleDropdown("services")}
            >
              Les Services
              <ChevronDown 
                size={18} 
                className={`transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} 
              />
            </button>
            {openDropdown === "services" && (
              <div className="pl-4 mt-1">
                <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Forum</a>
                <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Librairie</a>
                <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Echanges milticulturels</a>
                <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Films de voyage</a>
                <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Guides</a>
                <a href="#" className="block px-4 py-3 text-black font-bold hover:bg-gray-50 transition">Plateforme de réservations</a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;