import React from "react";
import { Grommet, Box, Form, FormField, Button } from "grommet";
import "./App.css";

type Note = {
  text: string;
};

type State = {
  text: string;
  notes: Note[];
};

class App extends React.Component<{}, State> {
  state = {
    text: "",
    notes: []
  };

  handleSubmit = () => {
    const { text } = this.state;

    this.setState(prevState => ({
      notes: [
        ...prevState.notes,
        {
          text
        }
      ]
    }));
  };

  render() {
    const { text, notes } = this.state;

    return (
      <Grommet full={true}>
        <Box fill={true} background="dark-1" align="center" justify="center">
          <Form>
            <FormField
              name="text"
              label="Text"
              onChange={({ target }) => this.setState({ text: target.value })}
              value={text}
            />
            <Button
              type="submit"
              primary
              label="Submit"
              color="brand"
              onClick={this.handleSubmit}
            />
          </Form>
          <>
            <Box direction="column" pad="medium">
              {notes.map((note: Note, index: number) => (
                <p key={index}>{note.text}</p>
              ))}
            </Box>
          </>
        </Box>
      </Grommet>
    );
  }
}

export default App;
