import React from "react";
import { Box, Form, Button, TextInput } from "grommet";
import { NoteType } from "./types";
import Note from "./Note";
import { STORAGE_NOTES_KEY } from "./constants";

type State = {
  text: string;
  notes: NoteType[];
};

class ControlPanel extends React.Component<{}, State> {
  state = {
    text: "",
    notes: []
  };

  componentDidMount() {
    this.syncNotes();
  }

  syncNotes = () => {
    const notesSource = localStorage.getItem(STORAGE_NOTES_KEY);
    if (!notesSource) return;

    const notes = JSON.parse(notesSource);
    this.setState({ notes });
  };

  saveNotesToStorage = (notes: NoteType[]) => {
    localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(notes));
  };

  handleClear = () => {
    localStorage.removeItem(STORAGE_NOTES_KEY);
    this.setState({ notes: [] });
  };

  handleSubmit = () => {
    const { text, notes } = this.state;

    const updatedNotes = [
      ...notes,
      {
        text
      }
    ];

    this.setState({ notes: updatedNotes });
    this.saveNotesToStorage(updatedNotes);
  };

  render() {
    const { text, notes } = this.state;

    return (
      <>
        <Box direction="column" pad="medium">
          {notes.map((note: NoteType, index: number) => (
            <Note key={index} note={note} />
          ))}
        </Box>
        <Form>
          <TextInput
            data-test-id="Field.Note"
            name="text"
            placeholder="Enter a Note..."
            onChange={({ target }) => this.setState({ text: target.value })}
            value={text}
          />
          <br />
          <Button
            data-test-id="Button.Submit"
            type="submit"
            primary
            label="Submit"
            color="brand"
            onClick={this.handleSubmit}
            margin="xsmall"
          />
          <Button
            data-test-id="Button.Clear"
            label="Clear"
            color="dark-3"
            onClick={this.handleClear}
            margin="xsmall"
          />
        </Form>
      </>
    );
  }
}

export default ControlPanel;
