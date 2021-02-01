import { Box, Grommet } from "grommet";
import { useState } from "react";
import { Router } from "@reach/router";
import AppBar from "./AppBar";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { AuthConsumer, AuthProvider } from "./AuthContext";
import Private from "./Private";

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
      <AuthProvider>
        <Box fill>
          <AppBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <AuthConsumer>
            {({ user }) => (
              <Router>
                <Login path="/" default />
                {user && <Private path="/private" />}
              </Router>
            )}
          </AuthConsumer>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </Box>
      </AuthProvider>
    </Grommet>
  );
}

export default App;
