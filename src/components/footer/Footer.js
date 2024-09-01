import "./style.css"

import telegram from "./../../img/icons/telegram.svg"
import gitHub from "./../../img/icons/gitHub.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"


const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="https://t.me/TvoiDorogoiDrug" target="_blank" rel="noreferrer"><img src={telegram} alt="" /></a>
              </li>
              <li className="social__item">
                <a href="https://github.com/Schachtinsk" target="_blank" rel="noreferrer"><img src={gitHub} alt="" /></a>
              </li>
              <li className="social__item">
                <a  href="https://www.linkedin.com/in/ilias-hildebrandt-278365319/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="" /></a>
              </li>
            </ul>
            <div className="copyright">
              <p>2024 begin-front</p>
            </div>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;