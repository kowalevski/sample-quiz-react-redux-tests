import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { Box, Form, TextInput, Button } from "grommet";
import NavLink from "./NavLink";
import { Card, Deck } from "./types";
import { AddDeckActionCreator, addDeck } from "./actions";

type DispatchProps = {
  addDeck: AddDeckActionCreator;
};

type Props = {} & DispatchProps;

export type State = {
  title: string;
  cards: Card[];
};

export class DeckControl extends React.Component<Props, State> {
  state: State = {
    title: "",
    cards: []
  };

  handleAddCard = () => {
    const { cards } = this.state;
    const newCard: Card = {
      id: uuid(),
      note: "",
      field: ""
    };

    this.setState({ cards: [...cards, newCard] });
  };

  handleChangeTitle = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ title: target.value });

  handleChangeCard = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const name = target.name as keyof Card;
    const { cards } = this.state;
    const newCards = [...cards];
    newCards[index][name] = target.value;

    this.setState({ cards: newCards });
  };

  handleSave = () => {
    const { title, cards } = this.state;
    const { addDeck } = this.props;

    const deck: Deck = {
      title,
      cards,
      id: uuid()
    };

    addDeck(deck);
  };

  render() {
    const { cards, title } = this.state;

    return (
      <>
        <h4>Create a new deck</h4>
        <Form>
          <Box margin="small">
            <TextInput
              value={title}
              placeholder="Enter a title"
              onChange={this.handleChangeTitle}
            />
          </Box>
          {cards.map((card: Card, index: number) => (
            <Box key={card.id} direction="row">
              <Box margin="small">
                <TextInput
                  name="note"
                  placeholder="Note"
                  value={cards[index].note}
                  onChange={e => this.handleChangeCard(e, index)}
                />
              </Box>
              <Box margin="small">
                <TextInput
                  name="field"
                  placeholder="Field"
                  value={cards[index].field}
                  onChange={e => this.handleChangeCard(e, index)}
                />
              </Box>
            </Box>
          ))}
          <Box justify="center" direction="row">
            <Box margin="small">
              <Button
                label="Add Card"
                color="dark-2"
                primary
                onClick={this.handleAddCard}
              />
            </Box>
            <Box margin="small">
              <Button
                label="Save new deck"
                color="brand"
                primary
                onClick={this.handleSave}
              />
            </Box>
          </Box>
        </Form>
        <br />
        <NavLink to="/memorize" label="↩️ Memorize" />
      </>
    );
  }
}

export default connect<null, DispatchProps>(
  null,
  {
    addDeck
  }
)(DeckControl);
