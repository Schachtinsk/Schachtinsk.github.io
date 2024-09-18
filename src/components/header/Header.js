import "./style.css"
import cv from "./../../files/cv.pdf"
import { useEffect } from "react";
import { animateLetters } from './../animations/GSAPAnimations';


const Header = () => {
  useEffect(() => {
    animateLetters('.word', 0.6);
  }, []);

    return ( 
        <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title ">
          <strong> Hi, my name is <em><span className="word">Ilias</span></em></strong><br />
          a frontend developer
        </h1>   
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href={cv} className="btn" download="CV.pdf">Download CV</a>
      </div>
    </header>
     );
}
 
export default Header;