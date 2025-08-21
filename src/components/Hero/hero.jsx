import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-wrap" id="home">
      <div className="hero-card">
        <div className="hero-grid">
          {/* Izquierda */}
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I am Gonzalo,<br />
              <span>a System Engineer Student</span>
            </h1>

            <p className="hero-lead">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>

            <a href="#contact" className="btn btn-primary">Contact Me</a>
          </div>

          {/* Derecha */}
          <div className="hero-media">
            <div className="hero-avatar">
              <img
                src="/avatar.jpg"      /* cambia por tu imagen */
                alt="Portrait"
                width="520"
                height="520"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
