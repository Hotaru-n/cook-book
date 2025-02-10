const RecipeCard = ({ isActive, onClick, time, title }) => {
  return (
    <article className="main__card card">
      <div className="main__card-image-wrapper">
        <img
          className="main__card-image"
          src="/images/sokaku.jpg"
          alt="Изображение продукта"
        />
        <p className="main__card-time">Время приготовления: {time}m</p>
      </div>
      <div className="main__card-title-wrapper">
        <h3 className="main__card-title">{title}</h3>
        <button
          onClick={onClick}
          className={`button main__card-button ${isActive ? "active" : ""}`}
        >
          Info
        </button>
      </div>
    </article>
  );
};

export default RecipeCard;

// "button main__card-button"
