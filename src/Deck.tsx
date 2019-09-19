import React from "react";
import { connect } from "react-redux";
import { Box } from "grommet";
import NavLink from "./NavLink";
import { RootStore, DeckStore } from "./types";
import { getDeck } from "./reducers";
import Card from "./Card";

type StateProps = {
  deck: DeckStore;
};

type Props = {} & StateProps;

const Deck: React.FC<Props> = ({ deck }) => {
  if (!deck)
    return (
      <>
        <Box background="dark-2" margin="xsmall" pad="xsmall">
          No Data
        </Box>
        <NavLink to="/memorize" label="↩️ Back" />
      </>
    );

  return (
    <div>
      <Box
        key={deck.id}
        background="dark-2"
        margin="xsmall"
        pad="small"
        direction="row"
      >
        <h3>{deck.title}</h3>
      </Box>
      {deck.cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
      <br />
      <NavLink to="/memorize" label="↩️ Memorize" />
    </div>
  );
};

export default connect(
  (state: RootStore): StateProps => ({
    deck: getDeck(state)
  })
)(Deck);
