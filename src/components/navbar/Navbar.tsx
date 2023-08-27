import Button from "../button/Button";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Button>Logo</Button>
    </div>
  );
};

export default Navbar;
