// src/pages/StudentLife.jsx
import React from "react";

const StudentLife = () => {
  // Ejemplo de datos de vida estudiantil
  const activities = [
    {
      title: "Club de Programación",
      description:
        "Únete al Club de Programación y mejora tus habilidades en diversos lenguajes y tecnologías.",
      image:
        "https://www.facebook.com/photo?fbid=1201718934553983&set=a.708579147201300", // URL de la imagen
    },
    {
      title: "Asociación de Estudiantes de Ingeniería",
      description:
        "Participa en la Asociación de Estudiantes de Ingeniería y ayuda a organizar eventos y actividades.",
      image: "https://via.placeholder.com/150", // URL de la imagen
    },
    {
      title: "Competencias Deportivas",
      description:
        "Forma parte de nuestros equipos deportivos y participa en competencias interuniversitarias.",
      image: "https://via.placeholder.com/150", // URL de la imagen
    },
    {
      title: "Eventos Sociales",
      description:
        "Asiste a eventos sociales organizados por la escuela para conocer a tus compañeros y disfrutar de un ambiente ameno.",
      image: "https://via.placeholder.com/150", // URL de la imagen
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Vida Estudiantil
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14">
          {activities.map((activity, index) => (
            <div
              key={index}
              class="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <img
                src={activity.image}
                alt={activity.title}
                class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
              <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {activity.title}
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  <p>{activity.description}</p>
                </p>
              </div>
              <div class="p-6 pt-0">
                <button
                  data-ripple-light="true"
                  type="button"
                  class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  Leer más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
