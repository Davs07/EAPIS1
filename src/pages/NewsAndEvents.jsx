// src/pages/NewsAndEvents.jsx
import React from "react";

const NewsAndEvents = () => {
  // Ejemplo de datos de noticias y eventos
  const news = [
    {
      title: "Huelga",
      date: "2024-07-31",
      description: "Invitamos a disfrutar de la primera huelga del año 2024.",
    },
    {
      title: "Semana Sistémica",
      date: "2024-07-15",
      description:
        "La Escuela de Ingeniería de Sistemas invita a todos los participantes a participar del increible.",
    },
    {
      title: "Campeonato de Bienvenida - Cachimbo Sistemas 2024",
      date: "2024-07-01",
      description:
        "La Escuela de Ingeniería de Sistemas invita a todos los participantes a participar del increible.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Noticias y Eventos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.date}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;
