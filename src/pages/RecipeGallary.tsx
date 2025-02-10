import { useState } from "react";
import Header from "../components/Header";
import RecipeCard from "../components/Card/RecipeCard";
import { cardInfo } from "../data";
import CardModal from "../components/Card/CardModal";
import { Button } from "antd";
import EditModal from "../components/Card/Edit_modal";

const RecipeGallary = () => {
  const [cardData] = useState(cardInfo);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardModalIsOpen, setCardModalOpen] = useState(false);
  const [editModalIsOpen, setEditModalOpen] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);

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
  console.log({ cardModalIsOpen, activeCardId });

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
            MODAL
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
              <p>{selectedCard?.recipe}</p>
            </CardModal>
          )}
        </article>
        {editModalIsOpen && (
          <CardModal onClose={handleCloseModal}>
            <EditModal />
          </CardModal>
        )}
        <article></article>
        <section className=" main__card-container ">
          {cardData.map((card) => {
            return (
              <RecipeCard
                // onClick={() => setCardModalOpen(true)}
                onClick={() => handleOpenModal(card)}
                key={card.id}
                title={card.title}
                time={card.time}
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
