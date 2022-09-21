import React from "react";
import Stories from "./components/Stories";
import "./styles/_global.scss";
import styles from "./App.module.scss";

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <h1>Hacker News</h1>
      </div>
      <Stories />
    </div>
  );
}

export default App;
