import { Button, TextInput } from "grommet";
import { AuthConsumer } from "./AuthContext";
import { Login as LoginIcon, Logout, UserFemale } from "grommet-icons";
import { useRef } from "react";

export default function Login(props) {
  const username = useRef();

  return (
    <AuthConsumer>
      {({ login, logout }) => {
        const handleLogin = async () => {
          login(username.current.value);
          await props.navigate("/private");
        };

        const handleLogout = async () => {
          logout();
          await props.navigate("/something");
        };
        return (
          <div>
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
              reverse
              icon={<LoginIcon />}
            />
            <Button
              a11yTitle="Logout"
              secondary
              label="Lougout"
              onClick={handleLogout}
              reverse
              icon={<Logout />}
            />
          </div>
        );
      }}
    </AuthConsumer>
  );
}
