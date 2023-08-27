import { Link } from "react-router-dom";
import Button from "../button/Button";
import styles from "./Navbar.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Navbar = () => {
  const currentPage = useSelector((state: RootState) => state.page.page);
  return (
    <div className={styles.container}>
      <Button>Logo</Button>
      {currentPage !== null && <Link to={"#"}>{currentPage ?? ""}</Link>}
    </div>
  );
};

export default Navbar;
