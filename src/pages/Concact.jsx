import React from "react";

function Contact() {
  return (
    <div class="container2">
      <span class="big-circle"></span>
      <img src="img/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Contáctanos</h3>
          <p class="text">
            Nos gustaría mucho que nos dejes una reseña u opinión sobre tu
            experiencia usando ESIA. Gracias por visitarnos!!!
          </p>

          <div class="info">
            <div class="information">
              <i class="fas fa-map-marker-alt"></i> &nbsp &nbsp
              <p>Universidad Nacional De Cajamarca</p>
            </div>
            <div class="information">
              <i class="fas fa-envelope"></i> &nbsp &nbsp
              <p>matraco@unc.edu.pe</p>
            </div>
            <div class="information">
              <i class="fas fa-phone"></i>&nbsp&nbsp
              <p>935 070 193</p>
            </div>
          </div>

          <div class="social-media">
            <p>Síguenos :</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 class="title">Contáctanos</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" />
              <label for="">Nombre de usuario</label>
              <span>Nombre de usuario</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" />
              <label for="">Teléfono</label>
              <span>Teléfono</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Mensaje</label>
              <span>Mensaje</span>
            </div>
            <input type="submit" value="Enviar" class="btn2" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
