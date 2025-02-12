import { useEffect, useState } from "react";
import CardForm from "./CardForm";
import RecipeCard from "./RecipeCard";

export default function EditModal({ onSave, initialData }) {
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      time: "",
      cover: "",
      description: "",
    }
  );

  useEffect(() => {
    if (initialData) {
      setFormData(initialData); //текущие данные карточки
    }
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSave) {
      onSave(formData);
    }
    setFormData({
      title: "",
      time: "",
      cover: "",
      description: "",
    });
  };
  console.log("Submited data:", formData);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {/* УБРАТЬ ИНЛАЙН СТИЛИ ПОСЛЕ ОПТИМИЗАЦИИ */}
      <section
        style={{
          display: "flex",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <CardForm
          value={formData}
          onChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <RecipeCard
          title={formData.title}
          time={formData.time}
          cover={formData.cover}
        />
      </section>
    </div>
  );
}
