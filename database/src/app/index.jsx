import styles from "./app.module.css";
import { Header } from "../components/header";

const App = () => {
  return (
    <div className={styles.body}>
      <Header />
    </div>
  );
};

export { App };
