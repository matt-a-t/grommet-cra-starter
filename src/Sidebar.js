import React from "react";
import { ResponsiveContext, Collapsible, Box, Layer, Button } from "grommet";
import { FormClose } from "grommet-icons";

export default function Sidebar(props) {
  const { showSidebar, setShowSidebar } = props;

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        if (!showSidebar || size !== "small") {
          return (
            <Collapsible direction="horizontal" open={showSidebar}>
              <Box
                flex
                width="medium"
                background="light-2"
                elevation="small"
                align="center"
                justify="center"
              >
                sidebar
              </Box>
            </Collapsible>
          );
        } else
          return (
            <Layer>
              <Box
                background="light-2"
                tag="header"
                justify="end"
                align="center"
                direction="row"
              >
                <Button
                  icon={<FormClose />}
                  onClick={() => setShowSidebar(false)}
                />
              </Box>
              <Box fill background="light-2" align="center" justify="center">
                small sidebar
              </Box>
            </Layer>
          );
      }}
    </ResponsiveContext.Consumer>
  );
}
