import { useState } from "react";
import CardForm from "./CardForm";

export default function EditModal() {
  const [createdCards, setCreatedCards] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    price: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setCreatedCards((prevItems) => [...prevItems, formData]);
    setFormData({
      name: "",
      author: "",
      price: "",
      cover: "",
      description: "",
    });
  };
  console.log("Submited data:", formData);

  return (
    <div>
      <section>
        <CardForm
          value={formData}
          onChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </section>
    </div>
  );
}
