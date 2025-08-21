import React from 'react'
import './AboutMe.css'

export const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        
        {/* Título principal */}
        <h2 className="about__title">About Me</h2>

        {/* Grid con dos columnas */}
        <div className="about__grid">
          
          {/* Columna izquierda */}
          <div className="about__left">
            <h3 className="about__question">Get to Know Me</h3>
            <p className="about__desc">
              I am a Systems Engineering student, passionate about organization, automation, and process efficiency. I am interested in 
              applying this knowledge to technological solutions that have a real impact on how people and companies work 
              in their daily lives. I am motivated by continuous learning, collaborating within multidisciplinary teams, and taking on new challenges that strengthen both my professional growth and the value I bring to every project.
            </p>
          </div>

          {/* Columna derecha */}
          <div className="about__right">
            <h3 className="about__subtitle">Education</h3>
            <div className="about__card">
              <div className="edu-list">
                <article className="edu-card">
                  <h4 className="edu-card__title">UTN - National Technological University</h4>
                  <p className="edu-card__period">March 2023 - Present</p>
                  <p className="edu-card__text">Systemas Engineering</p>
                </article>

                <article className="edu-card">
                  <h4 className="edu-card__title">ORT Technical School</h4>
                  <p className="edu-card__period">2018 - 2022</p>
                  <p className="edu-card__text">
                    High School Diploma in Business Management
                  </p>
                </article>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
