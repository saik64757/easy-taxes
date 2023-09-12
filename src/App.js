import Styles from "./App.module.css";
import React from "react";
import FormModal from "./Components/FormModal";

function App() {
  return (
    <div className={Styles.AppWrapper}>
      <h1 className={Styles.titleWrapper}>S-Corp Forms</h1>
      <FormModal />
    </div>
  );
}

export default App;
