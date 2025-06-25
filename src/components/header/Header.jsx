import "./header.css";
import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Header({ setIsReviewsOpen, isReviewsOpen }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isReviewsOpen) {
      setIsReviewsOpen(false);
      navigate("/");
    } else {
      setIsReviewsOpen(true);
      navigate("/reviews");
    }
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header_row">
          <div className="header_logo">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <nav className="header_nav">
            <ul className="nav_list">
              <li>
                <a href="#about">Главная</a>
              </li>
              <li>
                <a href="#menu">Меню</a>
              </li>
              <li>
                <button onClick={handleClick} className="link-button">
                  Отзывы
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
