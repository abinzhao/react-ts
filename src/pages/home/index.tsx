import React, { useState } from "react";
import logo from "./public/image/logo.svg";
import { Button } from "antd";
import styles from "./index.module.scss";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.home}>
      home
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className={styles.AppLink}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className={styles.AppLink}
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
          <Button>Button</Button>
        </header>
      </div>
    </div>
  );
};
export default Home;
