import FlashCard from "./FlashCard";
import AddCard from "./AddCard";
import { useState } from "react";
import { useSelector } from "react-redux";

const Deck = () => {
  const deck = useSelector((state) => state.deck.items);
  const deckSize = useSelector((state) => state.deck.totalCards);
  const [isAdding, setIsAdding] = useState(false);

  const addCardHandler = () => {
    setIsAdding(true);
  };

  const cancelCardHandler = () => {
    setIsAdding(false);
  };

  return (
    <>
      {deck.map((card) => (
        <FlashCard
          key={card.id}
          id={card.id}
          front={card.front}
          back={card.back}
        />
      ))}
      {!isAdding && <button onClick={addCardHandler}>Add New Card</button>}
      {isAdding && (
        <AddCard onCancel={cancelCardHandler} deckSize={deckSize}></AddCard>
      )}
    </>
  );
};

export default Deck;
