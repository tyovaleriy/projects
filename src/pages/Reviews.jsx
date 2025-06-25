import star from "./../img/star.png";
import "./reviews.css";

const Reviews = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonils_inner">
          <h2 className="section-title">Отзывы</h2>

          <div className="testimonials_feedbacks">
            <div className="testimonials_slider">
              <ul className="testimonials_list">
                <li className="testimonials_slide">
                  <p className="testimonials_feedback-text">
                    Потрясающий ресторан с душевной атмосферой! Кухня просто
                    великолепная – все свежее, вкусное, приготовлено с любовью.
                    Официанты внимательные и дружелюбные. Особенно впечатлил
                    домашний хлеб, который пекут прямо здесь. Цены полностью
                    соответствуют качеству. Источник:
                  </p>
                  <div className="testimonials_rating">
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                  </div>
                  <span className="testimonial_author">Семенов Даниил</span>
                </li>
                <li className="testimonials_slide">
                  <p className="testimonials_feedback-text">
                    Потрясающее место! Зашли сюда случайно во время прогулки и
                    влюбились с первого взгляда. Интерьер выполнен со вкусом,
                    каждая деталь продумана до мелочей. Официанты очень
                    внимательные и профессиональные. Особенно впечатлило, как
                    сомелье помог подобрать вино к нашим блюдам. Кухня – это
                    отдельный восторг. Стейк был приготовлен именно так, как я
                    люблю. Обязательно вернемся сюда снова! Источник:
                  </p>
                  <div className="testimonials_rating">
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                  </div>
                  <span className="testimonial_author">Карпов Даниил </span>
                </li>
                <li className="testimonials_slide">
                  <p className="testimonials_feedback-text">
                    Открыли для себя настоящую жемчужину! Шеф-повар творит
                    чудеса – такого нежного палтуса я еще не пробовал. Подача
                    блюд выше всяких похвал, каждая тарелка как произведение
                    искусства. Отдельное спасибо за винную карту – подборка
                    впечатляет, есть редкие позиции. Источник:
                  </p>
                  <div className="testimonials_rating">
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                  </div>
                  <span className="testimonial_author">
                    Соколова Мия Денисовна
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
