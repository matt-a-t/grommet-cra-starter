import { Box, Button, Heading, Text } from "grommet";
import { Notification } from "grommet-icons";
import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function AppBar(props) {
  const { setShowSidebar, showSidebar } = props;
  const { user } = useContext(AuthContext);

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    >
      <Heading level="3" margin="none">
        Grommet Starter
      </Heading>
      <Text>{user ? `Hello ${user.name}` : "Please log in"}</Text>
      <Button
        icon={<Notification />}
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
      />
    </Box>
  );
}
