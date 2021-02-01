import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "matt", foo: "bar" });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
