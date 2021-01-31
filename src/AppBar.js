import { Box, Button, Heading } from "grommet";
import { Notification } from "grommet-icons";

export default function AppBar(props) {
  const { setShowSidebar, showSidebar } = props;

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
        Insurance
      </Heading>
      <Button
        icon={<Notification />}
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
      />
    </Box>
  );
}
