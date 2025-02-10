export default function CardForm(props) {
  return (
    <form className="product-form" onSubmit={props.handleSubmit}>
      <div className="product-form__group">
        <label htmlFor="name" className="product-form__label">
          Название:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="product-form__input"
          value={props.value.name}
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
        <label htmlFor="price" className="product-form__label">
          Время:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          className="product-form__input"
          value={props.value.price}
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
