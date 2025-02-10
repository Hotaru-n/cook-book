import Header from "../components/Header";
import CardForm from "../components/Card/CardForm";
import { useState } from "react";

export default function UserPage() {
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
      <Header />
      UserPage
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
