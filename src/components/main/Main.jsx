import "./main.css";
import { useState } from "react";

import burger1 from "./../../img/burger1.jpeg";
import burger2 from "./../../img/burger2.jpeg";
import burger3 from "./../../img/burger3.jpeg";
import burger4 from "./../../img/burger4.jpeg";
import burger5 from "./../../img/burger5.jpeg";

const burgerList = [
  {
    id: 1,
    name: "Гамбургер MIX",
    price: "1950тг",
    img: burger1,
    description:
      "Микс говяжьей и куриной котлеты с фирменным соусом и овощами.",
  },
  {
    id: 2,
    name: "Гамбургер говяжий",
    price: "1550тг",
    img: burger2,
    description: "Классический говяжий бургер с салатом и соусом.",
  },
  {
    id: 3,
    name: "Гамбургер говяжий двойной",
    price: "1950тг",
    img: burger3,
    description: "Двойной говяжий бургер для настоящих гурманов.",
  },

  {
    id: 4,
    name: "Гамбургер куриный",
    price: "1350тг",
    img: burger4,
    description: "Куриная котлета с сочными овощами и соусом.",
  },
  {
    id: 5,
    name: "Гамбургер куриный двойной",
    price: "1800тг",
    img: burger5,
    description: "Двойная куриная котлета, сыр, салат и соус.",
  },
];

const Main = () => {
  const [selectedBurger, setSelectedBurger] = useState(null);

  return (
    <main className="section" id="menu">
      <div className="container">
        <h2 className="title-1">Гамбургеры</h2>
        <ul className="projects">
          {burgerList.map((burger) => (
            <li className="main" key={burger.id}>
              <div>
                <img src={burger.img} alt="burger" className="burger_img" />
                <h3 className="burger_title">{burger.name}</h3>
                <p
                  className="price"
                  onClick={() => setSelectedBurger(burger)}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  {burger.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedBurger && (
        <div className="modal-overlay" onClick={() => setSelectedBurger(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedBurger.img}
              alt={selectedBurger.name}
              className="modal-img"
            />
            <h2>{selectedBurger.name}</h2>
            <p>{selectedBurger.description}</p>
            <button className="add-button">Добавить</button>
            <button
              className="close-button"
              onClick={() => setSelectedBurger(null)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
