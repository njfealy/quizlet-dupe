import { useDispatch } from "react-redux";
import { deckActions } from "../store/deck-slice";

const FlashCard = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deckActions.deleteFlashCard(props.id));
  };

  return (
    <div>
      <button onClick={deleteHandler}>Delete</button>
      <h3>{props.id}</h3>
      <div>{props.front}</div>
      <div>{props.back}</div>
    </div>
  );
};

export default FlashCard;
