import React from "react";
import emojipedia from "../emojipedia";
import emojiDetails from "./emojiDetails";

const Copyright = "copyright yuvraj umale";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emojiDetails)}</dl>
      <footer>{Copyright} </footer>
    </div>
  );
}

export default App;
