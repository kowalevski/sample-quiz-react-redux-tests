import React from "react";
import { Grommet, Box, Form, FormField, Button } from "grommet";
import "./App.css";

function App() {
  return (
    <Grommet full={true}>
      <Box fill={true} background="dark-1" align="center" justify="center">
        <Form>
          <FormField name="name" label="Name" />
          <Button type="submit" primary label="Submit" color="brand" />
        </Form>
      </Box>
    </Grommet>
  );
}

export default App;
