import { useNavigate } from "react-router-dom";

const LibraryButton = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("./decks");
  };

  return <button onClick={clickHandler}>Decks</button>;
};

export default LibraryButton;
