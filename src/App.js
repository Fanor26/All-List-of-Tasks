import React from "react";
import FormComponent from "./components/FormComponent";
import HeaderComponent from "./components/HeaderComponent";
import { main } from "./App.module.scss";
function App() {
  return (
    <main className={main}>
        <HeaderComponent />
      <FormComponent />
    </main>
  );
}

export default App;
