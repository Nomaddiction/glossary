import styles from "./app.module.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Buttons } from "../components/buttons";

const App = () => {
  return (
    <div className={styles.body}>
      <Header />
      <Buttons />
      <Footer />
    </div>
  );
};

export { App };
