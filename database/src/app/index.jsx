import styles from "./app.module.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const App = () => {
  return (
    <div className={styles.body}>
      <Header />
      <Footer />
    </div>
  );
};

export { App };
