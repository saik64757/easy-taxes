import { createContext, useContext, useState } from "react";

let FormContext = createContext();

const FormContextProvider = ({ children }) => {
  let [userDetails, setuserDetails] = useState(null);
  let [forms, setforms] = useState([]);
  return (
    <FormContext.Provider
      value={{ userDetails, setuserDetails, forms, setforms }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
export const useFroms = () => useContext(FormContext);
