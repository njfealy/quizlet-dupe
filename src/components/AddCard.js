import { useDispatch } from "react-redux";

import { useState } from "react";
import { deckActions } from "../store/deck-slice";

const AddCard = (props) => {
  const [front, setFront] = useState();
  const [back, setBack] = useState();

  const dispatch = useDispatch();

  const frontChangeHandler = (event) => {
    setFront(event.target.value);
  };

  const backChangeHandler = (event) => {
    setBack(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(
      deckActions.addFlashCard({ front: front || "", back: back || "" })
    );
    setFront();
    setBack();
    props.onCancel();
  };

  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Front:</label>
        <input onChange={frontChangeHandler} />
      </div>
      <div>
        <label>Back: </label>
        <input onChange={backChangeHandler} />
      </div>
      <button type="submit">Add Card</button>
      <button onClick={cancelHandler}>Cancel</button>
    </form>
  );
};

export default AddCard;
