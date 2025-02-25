import { useEffect, useState } from "react";
import Header from "../components/Header";
import RecipeCard from "../components/Card/RecipeCard";
// import { cardInfo } from "../data";
import CardModal from "../components/Card/CardModal";
import { Button } from "antd";
import EditModal from "../components/Card/Edit_modal";
import apiRequest from "../apiRequest";

// npx json-server data/db.json

const RecipeGallary = () => {
  const API_URL = "http://localhost:3000/items";

  const [cardData, setCardData] = useState([]);
  const [nextId, setNextId] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardModalIsOpen, setCardModalOpen] = useState(false);
  const [editModalIsOpen, setEditModalOpen] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);
  const [editingCard, setEditingCard] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not reseive expected data");
        const listItems = await response.json();
        console.log(listItems);
        setCardData(listItems);
        setFetchError(null);
        setNextId(listItems.length + 1);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      }
    };
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 500);
  }, []);

  const handleAddCard = async (newCard) => {
    const cardWithId = {
      ...newCard,
      id: nextId.toString(),
    };
    setNextId((prevId) => prevId + 1);
    setCardData((prevCards) => [...prevCards, cardWithId]);
    console.log("New card id:", cardWithId.id);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardWithId),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleEditCard = (card) => {
    setEditingCard(card);
    setEditModalOpen(true);
  };

  const handleSaveEditedCard = async (updatedCard) => {
    setCardData((prevCards) =>
      prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
    setEditModalOpen(false);
    setEditingCard(null);

    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCard),
    };
    const reqUrl = `${API_URL}/${updatedCard.id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDeleteCard = async (id) => {
    setCardData((prevCards) => {
      const updatedCards = prevCards.filter((card) => card.id !== id);

      // Обновляем nextId, находя максимальный id среди оставшихся карточек
      const maxId = updatedCards.reduce(
        (max, card) => Math.max(max, parseInt(card.id, 10)),
        0
      );
      setNextId(maxId + 1); // Устанавливаем следующий ID
      return updatedCards;
    });

    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };

  const handleOpenModal = (card) => {
    setSelectedCard(card);
    setCardModalOpen(true);
    setActiveCardId(card.id);
  };

  const handleCloseModal = () => {
    setCardModalOpen(false);
    setEditModalOpen(false);
    setSelectedCard(null);
    setActiveCardId(null);
    setEditingCard(null);
  };

  return (
    <div className="main-div">
      <Header />
      <main className="main">
        <article className="main__title-block">
          <h1 className="main__title-block-text">RECIPE GALLERY</h1>
          <Button
            className="button main__title-block-button "
            onClick={() => setEditModalOpen(true)}
          >
            New Card
          </Button>
        </article>
        <article>
          {cardModalIsOpen && (
            <CardModal onClose={handleCloseModal}>
              <p>
                <img
                  width={"300"}
                  src="/images/sokaku.jpg"
                  className="modal__card-image"
                />
                {selectedCard?.description}
              </p>
            </CardModal>
          )}
        </article>
        {editModalIsOpen && (
          <CardModal onClose={handleCloseModal}>
            <EditModal
              onSave={editingCard ? handleSaveEditedCard : handleAddCard}
              initialData={editingCard}
            />
          </CardModal>
        )}
        <article></article>
        <section className=" main__card-container ">
          {fetchError && (
            <p
              style={{
                marginLeft: "2rem",
                textAlign: "center",
                borderRadius: "7px",
                width: "600px",
                backgroundColor: "#466A44",
                color: "#E0D5BE",
                fontSize: "2rem",
              }}
            >{`Error: ${fetchError}`}</p>
          )}
          {cardData.map((card) => {
            return (
              <RecipeCard
                onClick={() => handleOpenModal(card)}
                onEdit={() => handleEditCard(card)}
                onDelete={() => handleDeleteCard(card.id)}
                key={card.id}
                title={card.title}
                time={card.time}
                cover={card.cover}
                isActive={cardModalIsOpen && activeCardId === card.id}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default RecipeGallary;
