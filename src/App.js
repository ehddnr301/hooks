import React from "react";
import Screen from "./Screen";
import Lang from "./Context";
import translations from "./translations";

function App() {
  return (
    <Lang defaultLang="en" translations={translations}>
      <Screen></Screen>
    </Lang>
  );
}

export default App;
