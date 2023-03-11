import StudyButton from "./StudyButton";
import LibraryButton from "./LibraryButton";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">Quizlet Dupe</Link>
      <nav>
        <ul>
          <li>
            <StudyButton></StudyButton>
          </li>
          <li>
            <LibraryButton></LibraryButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
