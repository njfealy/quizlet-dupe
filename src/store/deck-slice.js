import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const deckSlice = createSlice({
  name: "deck",
  initialState: {
    items: [],
    totalCards: 0,
    changed: false,
  },
  reducers: {
    replaceDeck(state, action) {
      state.totalCards = action.payload.totalCards;
      state.items = action.payload.items;
    },
    addFlashCard(state, action) {
      const newCard = action.payload;
      state.totalCards++;
      state.items.push({
        id: v4(),
        front: newCard.front,
        back: newCard.back,
      });
      state.changed = true;
    },
    deleteFlashCard(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalCards--;
      state.changed = true;
    },
  },
});
export const deckActions = deckSlice.actions;
export default deckSlice;
