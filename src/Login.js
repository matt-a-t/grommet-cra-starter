import { Box, Button, TextInput } from "grommet";
import AuthContext from "./AuthContext";
import { Login as LoginIcon, UserFemale } from "grommet-icons";
import { useContext, useRef } from "react";

export default function Login(props) {
  const username = useRef();
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    login({ name: username.current.value });
    await props.navigate("/private");
  };

  return (
    <Box justify="center" align="center" pad="large">
      <Box border pad="large" align="center" gap="small">
        <TextInput
          a11yTitle="Username"
          icon={<UserFemale />}
          placeholder="Username"
          label="Username"
          ref={username}
        />
        <Button
          a11yTitle="Login"
          primary
          label="Login"
          onClick={handleLogin}
          icon={<LoginIcon />}
        />
      </Box>
    </Box>
  );
}
