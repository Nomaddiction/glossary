import styles from "./app.module.css";
import StarWarsLogo2 from "/public/StarWarsLogo2.png";

const App = () => {
  return (
    <div className={styles.body}>
      <div className={styles.footer_left}>All Rights Reserved.</div>
      <div className={styles.footer_right}>Created by Sergei Egorushkin</div>
      <div className={styles.header_middle}>
        Star Glossary
        <div className={styles.header_right}>About Us</div>
        <div className={styles.header_left}>
          <img src={StarWarsLogo2}></img>
        </div>
      </div>
    </div>
  );
};

export { App };
