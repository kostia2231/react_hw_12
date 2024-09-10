import React, { useState } from "react";
import ValueDisplay from "./components/ValueDisplay";
import "./App.css";
import styles from "./components/styles.module.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className={styles.formWrapper}>
        <h1>Current and Previous Value App.</h1>
        <input
          autoFocus
          type="text"
          value={value}
          onChange={(el) => setValue(el.target.value)}
          placeholder="Write something here..."
        />
      </div>
      <ValueDisplay value={value} />
    </>
  );
}

export default App;
