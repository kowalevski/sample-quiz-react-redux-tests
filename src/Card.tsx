import React from "react";
import { Box } from "grommet";
import { Card } from "./types";

type Props = {
  card: Card;
};

type State = {
  isShown: boolean;
};

class CardView extends React.Component<Props, State> {
  state = {
    isShown: false
  };

  handleClick = () => this.setState({ isShown: true });

  render() {
    const { card } = this.props;
    const { isShown } = this.state;

    return (
      <Box key={card.id} margin="xsmall" direction="row">
        <Box background="#604a94" pad="xsmall" width="small" align="center">
          {card.note}
        </Box>
        <Box background="light-2" pad="xsmall" width="small" align="center">
          {isShown && <span>{card.field}</span>}
          {!isShown && <span onClick={this.handleClick}>🧐</span>}
        </Box>
      </Box>
    );
  }
}

export default CardView;
