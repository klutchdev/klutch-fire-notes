import { createContext } from "react";
import { auth } from "../../firebase";

export const UserContext = createContext({
  user: null,
});

const UserContextProvider = ({ children }) => {
  const user = auth.currentUser;

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
