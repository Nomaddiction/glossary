import styles from "./buttons.module.scss";

export const TopButtons = () => {
  return (
    <div className={styles.default}>
      <button className={styles.button}>Universe Characters</button>
      <button className={styles.button}>Own Characters</button>
    </div>
  );
};
