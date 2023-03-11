import { useNavigate } from "react-router-dom";

const StudyButton = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("./study");
  };

  return <button onClick={clickHandler}>Study</button>;
};

export default StudyButton;
