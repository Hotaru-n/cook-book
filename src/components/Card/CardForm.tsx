export default function CardForm(props) {
  return (
    <form className="product-form" onSubmit={props.handleSubmit}>
      <div className="product-form__group">
        <label htmlFor="name" className="product-form__label">
          Название:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="product-form__input"
          value={props.value.title}
          onChange={props.onChange}
        />
      </div>
      {/* <div className="product-form__group">
        <label htmlFor="author" className="product-form__label">
          Автор:
        </label>
        <input
          type="text"
          id="author"
          name="author"
          className="product-form__input"
          value={props.value.author}
          onChange={props.onChange}
        />
      </div> */}
      <div className="product-form__group">
        <label htmlFor="time" className="product-form__label">
          Время:
        </label>
        <input
          type="number"
          id="time"
          name="time"
          className="product-form__input"
          value={props.value.time}
          onChange={props.onChange}
        />
      </div>
      <div className="product-form__group">
        <input
          type="text"
          id="cover"
          name="cover"
          placeholder="image url for cover"
          className="product-form__cover"
          value={props.value.cover}
          onChange={props.onChange}
        />
      </div>
      <div className="product-form__group">
        <label htmlFor="description" className="product-form__label">
          Рецепт:
        </label>
        <textarea
          id="description"
          name="description"
          className="product-form__textarea"
          value={props.value.description}
          onChange={props.onChange}
        ></textarea>
      </div>
      <button type="submit" className="product-form__button">
        Сохранить
      </button>
    </form>
  );
}
