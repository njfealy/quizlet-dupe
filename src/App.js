import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import StudyPage from "./pages/StudyPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchDeckData, sendDeckData } from "./store/deck-actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/decks", element: <LibraryPage /> },
      { path: "/study", element: <StudyPage /> },
    ],
  },
]);

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const deck = useSelector((state) => state.deck);

  useEffect(() => {
    dispatch(fetchDeckData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (deck.changed === true) {
      dispatch(sendDeckData(deck));
    }
  }, [deck, dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
