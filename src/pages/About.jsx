import React from "react";

const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="flex items-center justify-center flex-col h-screen px-40">
        <h2 className="text-3xl font-bold text-start mb-8 text-blue-600">
          Nosotros
        </h2>
        <div className="w-full text-start">
          <p className="text-md mb-4">
            La Ingeniería de Sistemas se encarga desde la concepción de un
            sistema hasta su producción con un enfoque integrador,
            interdisciplinario colaborativo, para integrar soluciones de
            tecnologías de información y procesos de negocio orientados a
            satisfacer las necesidades de la sociedad.
          </p>
          <p className="text-md mb-4">
            Nuestros profesionales tienen capacidad de adaptación y utilizando
            un enfoque integrador, generan cambios a través de soluciones
            basadas en Tecnologías de: la Información, comunicación, gestión y
            desarrollo de sistemas de información que conduzcan al eficiente y
            eficaz funcionamiento de los procesos y la toma de decisiones dentro
            del ámbito organizacional, así como mediante el diseño de modelos
            dinámicos para la solución de problemas complejos.
          </p>
        </div>
      </div>
      <div className="w-full h-screen grid place-items-center bg-[#F9FAFE] px-40">
        <div className="w-full grid grid-cols-2 gap-16 ">
          <div className="w-full text-center px-4 py-2 text-sm   rounded-2xl bg-white shadow-1">
            <h3 className="text-xl font-semibold mb-2">Historia</h3>
            <p>
              La Universidad Nacional de Cajamarca creó la Escuela Académico
              Profesional de Ingeniería de Sistemas, el 29 de enero de 1992,
              ante la necesidad de las organizaciones y empresas cajamarquinas
              de este tipo de profesionales, gracias al estudio integral de
              justificación de la carrera y gestiones realizadas por la comisión
              liderada por el ingeniero Carlos Rodríguez Black.
            </p>
            <p>
              A partir del año 1992 hasta el año 1997 se implementó el primer
              Plan de Estudios. Luego en el año 1997, se aprobó el primer
              Currículo de Estudios, siendo actualizado solo el Plan de Estudios
              en el año 2001, posteriormente en el año 2007 se aprobó y entró en
              vigencia un nuevo currículo hasta el año 2018.
            </p>
            <p>
              En el año 2018 se comenzó a trabajar en la elaboración de un nuevo
              Currículo de Estudios considerando al cuerpo de conocimiento de la
              carrera de Sistemas de Información de la Computing Currícula,
              documento base desarrollado por la Association for Computing
              Machinery (ACM), la IEEE Computer Society y la Association for
              Information Systems (AIS), entrando en vigencia en el año 2019
              hasta la actualidad.
            </p>
            <p>
              Actualmente la Escuela Académico Profesional de Ingeniería de
              Sistemas, con 29 años al servicio de la formación integral de
              Ingenieros de Sistemas, cuenta con una plana docente altamente
              capacitada y una infraestructura moderna y adecuada para el
              desarrollo de sus actividades académicas, de investigación, de
              proyección social y administrativas.
            </p>
          </div>
          <div className="w-full text-center rounded-2xl  bg-white shadow-1 overflow-hidden">
            <img
              src="https://www.unc.edu.pe/wp-content/uploads/2021/10/galer-3.jpg"
              alt="EspaceX"
              className="h-full w-full "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-12 h-max gap-8 ">
        <div class="card">
          <div class="content h-full">
            <h3 className="text-xl font-semibold mb-2">Misión</h3>
            <p>
              Somos una Escuela Académico Profesional comprometida con la
              calidad del proceso de enseñanza aprendizaje, alineada a
              estándares internacionales de formación académica y demanda
              social, articulada con la Investigación científica y tecnológica,
              así como con la responsabilidad social, que aseguran la formación
              integral de Ingenieros de Sistemas.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="content h-full">
            <h3 className="text-xl font-semibold mb-2">Visión</h3>
            <p>
              Escuela Académico Profesional Acreditada, inmersa en la mejora
              continua a favor del desarrollo Regional y Nacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
