import styles from "./app.module.scss";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { TopButtons } from "../components/buttons/greenbuttons";
import { Buttons } from "../components/buttons/middlebuttons";

const App = () => {
  return (
    <div className={styles.body}>
      <Header />
      <TopButtons />
      <Buttons />
      <Footer />
    </div>
  );
};

export { App };
