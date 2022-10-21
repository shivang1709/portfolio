import React from "react";
import "./About.css";
import aboutImg from "./img/WhatsApp Image 2022-08-13 at 3.18.30 AM.jpeg";
import cv from "./img/Shivang's novResume.pdf"
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="WhatsApp Image 2022-08-13 at 3.18.30 AM.jpeg" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hi, I am Shivang Singh from Lucknow, U.P, India.

              </p>
              <p className="about__text p__color">
                Web development is my passion ,now i want to convert my passion into profession  and curious to earn experience. Self Motivated, interested to build web development Projects.
                Multifaceted technical professional with track record of creativity, continuous improvement, and success
                Seek opportunities to transform company practices into fresh, cost-effective solutions leading to more efficient operations.
                Software development / Web development / Full stack Developer
              </p>
              <p className="about__text p__color">
                Passionate learner and a developer in HTML,CSS,Javascript,React.

              </p>
              <div className="about__button d__flex align__items__center">
                <a href={cv} download>
                  <button className="about btn pointer">DOWNLOAD CV</button>
                </a>
                <a href="#Home">
                  <button className="about btn pointer">HIRE ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#Home" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;