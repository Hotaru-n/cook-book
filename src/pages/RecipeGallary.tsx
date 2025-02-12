import { useState } from "react";
import Header from "../components/Header";
import RecipeCard from "../components/Card/RecipeCard";
import { cardInfo } from "../data";
import CardModal from "../components/Card/CardModal";
import { Button } from "antd";
import EditModal from "../components/Card/Edit_modal";

const RecipeGallary = () => {
  // const [cardData, setCardData] = useState([]);
  const [cardData, setCardData] = useState(cardInfo);
  const [nextId, setNextId] = useState(cardInfo.length + 1);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardModalIsOpen, setCardModalOpen] = useState(false);
  const [editModalIsOpen, setEditModalOpen] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);
  const [editingCard, setEditingCard] = useState(null);

  const handleAddCard = (newCard) => {
    const cardWithId = {
      ...newCard,
      id: nextId,
    };
    setNextId((prevId) => prevId + 1);
    setCardData((prevCards) => [...prevCards, cardWithId]);
    console.log("New card id:", cardWithId.id);
  };

  const handleEditCard = (card) => {
    setEditingCard(card);
    setEditModalOpen(true);
  };

  const handleSaveEditedCard = (updatedCard) => {
    setCardData((prevCards) =>
      prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
    setEditModalOpen(false);
    setEditingCard(null);
  };

  const handleDeleteCard = (id) => {
    setCardData((prevCards) => prevCards.filter((card) => card.id !== id));
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
  };

  // console.table(cardData);
  // console.log({ cardModalIsOpen, activeCardId });

  return (
    <div className="main-div">
      <Header />
      <main className="main">
        <article className="main__title-block">
          <h1 className="main__title-block-text">RECIPE GALLARY</h1>
          <Button
            className="button main__title-block-button "
            onClick={() => setEditModalOpen(true)}
          >
            New Card
          </Button>
        </article>
        <article>
          {/* <Button
            className="button menu__button "
            onClick={() => setCardModalOpen(true)}
          >
            MODAL
          </Button> */}
          {cardModalIsOpen && (
            <CardModal onClose={handleCloseModal}>
              {/* <img width={"300"} src="/images/sokaku.jpg" /> */}
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
          {cardData.map((card) => {
            return (
              <RecipeCard
                // onClick={() => setCardModalOpen(true)}
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
