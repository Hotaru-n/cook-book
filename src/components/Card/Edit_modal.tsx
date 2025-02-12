import { useState } from "react";
import CardForm from "./CardForm";
import RecipeCard from "./RecipeCard";

export default function EditModal({ onSave }) {
  // const [createdCards, setCreatedCards] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    time: "",
    cover: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setCreatedCards((prevItems) => [...prevItems, formData]);
  //   setFormData({
  //     title: "",
  //     time: "",
  //     cover: "",
  //     description: "",
  //   });
  // };

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
