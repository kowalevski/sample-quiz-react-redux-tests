import React from "react";
import { Grommet, Box } from "grommet";
import ControlPanel from "./ControlPanel";

import "./App.css";

const App: React.FC = () => (
  <Grommet full={true}>
    <Box fill={true} background="dark-1" align="center" justify="center">
      <h1>Simple Notes App</h1>
      <ControlPanel />
    </Box>
  </Grommet>
);

export default App;
