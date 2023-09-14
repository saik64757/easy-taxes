import Styles from "./App.module.css";
import React from "react";
import FormModal from "./Components/FormModal";
import FormsList from "./Components/FormsList";

function App() {
  return (
    <div className={Styles.AppWrapper}>
      <h1 className={Styles.titleWrapper}>S-Corp Forms</h1>
      <FormsList />
      <FormModal />
    </div>
  );
}

export default App;
