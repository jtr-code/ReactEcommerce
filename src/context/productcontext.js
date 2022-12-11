import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ myName: "AppContext" }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook

const useProductContextGlobal = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContextGlobal };
