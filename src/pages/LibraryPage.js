import {useSelector} from '@reduxjs/toolkit'

import Decks from "../components/Decks"

const LibraryPage = () => {
  return (
    <>
      <h1>Deck Page</h1>
      <Decks></Decks>
    </>
  );
};

export default LibraryPage;
