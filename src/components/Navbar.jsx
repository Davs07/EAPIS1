import React from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const sections = [
    {
      name: "Home",
      url: "/",
      icon: <i className="fas fa-home"></i>,
    },
    {
      name: "Nosotros",
      url: "/about",
      icon: <i className="fas fa-users"></i>,
    },
    {
      name: "Noticia y Eventos",
      url: "/news-and-events",
      icon: <i className="fas fa-briefcase"></i>,
    },
    {
      name: "Vida Estudiantil",
      url: "/student-life",
      icon: <i className="fas fa-envelope"></i>,
    },
    {
      name: "Contact",
      url: "/contact",
      icon: <i className="fas fa-sign-in-alt"></i>,
    },
  ];

  return (
    <nav className="bg-blue-600 p-4 w-screen min-h-16">
      <div className="container mx-auto flex justify-between items-center text-white ">
        <a href="#" className=" text-lg font-bold">
          ESIA
        </a>
        <button className=" md:hidden">
          <i className="fas fa-bars"></i>
        </button>
        <div className="hidden md:flex space-x-4">
          {sections.map((section, index) => (
            <a
              key={index}
              href={section.url}
              className={`flex items-center justify-center p-2 text-center rounded-xl   ${
                section.url === location.pathname
                  ? "bg-white text-blue-600"
                  : ""
              }`}>
              {section.icon}
              <span className="">{section.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
