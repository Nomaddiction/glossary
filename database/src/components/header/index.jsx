import StarWarsLogo2 from "/StarWarsLogo2.png";
import { Popover } from "./popover";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.main}>
      <div className="py-1">
        <img src={StarWarsLogo2}></img>
      </div>
      <div className="py-2">Star Glossary</div>
      <div>
        <Popover />
      </div>
    </div>
  );
};
