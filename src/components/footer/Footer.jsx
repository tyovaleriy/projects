import "./footer.css";
import twiter from "./../../img/twitter.png";
import instagarm from "./../../img/instagram.webp";
import vk from "./../../img/vk.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <ul className="social">
            <li className="social_item">
              <a href="img">
                <img src={vk} alt="link" />
              </a>
            </li>

            <li className="social_item">
              <a href="img">
                <img src={instagarm} alt="link" />
              </a>
            </li>

            <li className="social_item">
              <a href="img">
                <img src={twiter} alt="link" />
              </a>
            </li>
          </ul>
          <div className="pre-end">
            © 2019—2025 Семья любимых кафешек SalamBro в Алматы
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
