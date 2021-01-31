import { Box, Grommet } from "grommet";
import { useState } from "react";
import { Router } from "@reach/router";

import AppBar from "./AppBar";
// import routes from "./routes";
import Sidebar from "./Sidebar";
import Login from "./Login";

const theme = {
  global: {
    colors: {
      brand: "#009a00",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Router>
            <Login path="/login" default />
          </Router>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
