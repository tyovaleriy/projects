import "./promo.css";

const Promo = () => {
  return (
    <section className="promo" id="about">
      <div className="wrapper">
        <h1 className="promo_title">
          Добро пожаловать! В наш ресторан SALAM BRO
        </h1>
        <h2>Самый сочный фастфуд, который покорит твоё сердце!</h2>

        <div className="promo_text">
          <p>
            «Salam Bro» – одно из сетей общепита, предлагающее широкий
            ассортимент продуктов быстрого приготовления по собственным
            рецептам.{" "}
          </p>
        </div>

        <a href="https://salambro.com/order" target="_blank" className="btn">
          Нажимайте и заказывайте с других точек
        </a>
      </div>
    </section>
  );
};

export default Promo;
