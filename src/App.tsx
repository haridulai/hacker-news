import React from "react";
import Stories from "./components/Stories";
import "./styles/_global.scss";
import styles from "./App.module.scss";

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <Stories />
    </div>
  );
}

export default App;
