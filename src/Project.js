import React from "react";
import "./Project.css";
import Project1 from './img/todoweb.png';
import Project2 from './img/digitalclock.png';
import Project3 from './img/blog.png';


function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">To Do App</h5>
                     <a href="https://shivang1709.github.io/project-5-todo-app-js/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Digital clock </h5>
                     <a href="https://shivang1709.github.io/project-4-Digital-clock/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                  <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                     <div className="project__box__img pointer relative">
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">React Blog</h5>
                     <a href="https://stellular-biscotti-771db0.netlify.app"  className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;