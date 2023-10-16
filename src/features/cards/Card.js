import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { selectCards } from './cardsSlice.js';


export default function Card({ id }) {
  const cards = useSelector(selectCards);//{}; // replace this with a call to your selector to get a card by id
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);




  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
