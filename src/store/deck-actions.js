import { deckActions } from "./deck-slice";

export const fetchDeckData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://quizlet-dupe-7e7d1-default-rtdb.firebaseio.com/deck.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch deck data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const deckData = await fetchData();
      dispatch(
        deckActions.replaceDeck({
          items: deckData.items || [],
          totalCards: deckData.totalCards,
        })
      );
    } catch (error) {}
  };
};

export const sendDeckData = (deck) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://quizlet-dupe-7e7d1-default-rtdb.firebaseio.com/deck.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: deck.items,
            totalCards: deck.totalCards,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending deck data failed.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {}
  };
};
