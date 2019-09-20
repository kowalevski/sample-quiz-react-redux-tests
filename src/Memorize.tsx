import React from "react";
import DeckList from "./DeckList";
import NavLink from "./NavLink";

const Memorize: React.FC = () => (
  <>
    <h1>Memorize</h1>
    <p>kind of Anki</p>
    <DeckList />
    <br />
    <NavLink
      data-test-id="Navigation.Deck.Control"
      to="/deck-control"
      label="🗃️ Create a new deck"
    />
    <NavLink to="/" label="🏠 Home" />
  </>
);

export default Memorize;
