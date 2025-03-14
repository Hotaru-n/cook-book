import { CloseOutlined, EditOutlined } from "@ant-design/icons";

type RecipeCardProps = {
  isActive: boolean;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
  time: string;
  title: string;
  cover: string;
};

const RecipeCard: React.FC<RecipeCardProps> = ({
  isActive,
  onClick,
  onEdit,
  onDelete,
  time,
  title,
  cover,
}) => {
  return (
    <article className={`main__card card ${isActive ? "active" : ""} `}>
      <div className="main__card-image-wrapper">
        <CloseOutlined
          type="button"
          className="main__card-delete"
          style={{
            fontSize: "15px",
          }}
          onClick={onDelete}
        />
        <EditOutlined
          type="button"
          className="main__card-edit"
          style={{
            fontSize: "15px",
          }}
          onClick={onEdit}
        />
        <img
          onClick={onClick}
          className="main__card-image"
          src={cover || "/images/sokaku.jpg"}
          alt="Изображение продукта"
        />

        <p className="main__card-time">Время приготовления: {time}m</p>
      </div>
      <div className="main__card-title-wrapper">
        <h3 className="main__card-title">{title}</h3>
        {/* <button
          onClick={onClick}
          className={`button main__card-button ${isActive ? "active" : ""}`}
        >
          Info
        </button> */}
      </div>
    </article>
  );
};

export default RecipeCard;

// "button main__card-button"
