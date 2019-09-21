import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Box } from "grommet";
import decksData from "./data/decks.json";
import {
  setDeck,
  SetDeckActionCreator,
  loadDecks,
  LoadDecksActionCreator
} from "./actions";
import { getDecks } from "./reducers";
import { Deck, RootStore } from "./types";

type DispatchProps = {
  setDeck: SetDeckActionCreator;
  loadDecks: LoadDecksActionCreator;
};

type StateProps = {
  decks: Deck[];
};

type Props = DispatchProps & StateProps;

const DeckLink = styled.div`
  a {
    color: #f4f4f4;
    text-decoration: none;
  }
`;

export class DeckList extends React.Component<Props> {
  componentDidMount() {
    const { loadDecks, decks } = this.props;

    if (!decks.length) {
      loadDecks(decksData);
    }
  }

  handleLinkClick = (deck: Deck) => this.props.setDeck(deck);

  render() {
    const { decks } = this.props;

    return (
      <div>
        <h3>Decks</h3>
        {decks.map(deck => (
          <Box
            data-test-id="DeckList.Deck"
            key={deck.id}
            background="dark-2"
            margin="xsmall"
            pad="xsmall"
            justify="between"
            direction="row"
          >
            <DeckLink>
              <Link
                to="/deck"
                key={deck.id}
                onClick={() => this.handleLinkClick(deck)}
              >
                <span>{deck.title}</span>
              </Link>
            </DeckLink>
          </Box>
        ))}
      </div>
    );
  }
}

export default connect(
  (state: RootStore): StateProps => ({
    decks: getDecks(state)
  }),
  {
    setDeck,
    loadDecks
  }
)(DeckList);
