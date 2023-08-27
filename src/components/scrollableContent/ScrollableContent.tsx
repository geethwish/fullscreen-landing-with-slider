import React from "react";
import styles from "./ScrollableContent.module.scss";
import bg from "../../assets/images/bg1.webp";
import StickyButton from "../stickyButton/StickyButton";
import { BiSolidChevronDown } from "react-icons/bi";

const ScrollableContent = () => {
  const handleScroll = () => {};

  return (
    <div className={styles.container}>
      <img
        src={bg}
        className={styles.bgImage}
        alt="backgroundImage"
        // srcSet="https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_960_720.jpg 1x, https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg 2xF"
      />
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>
      </div>
      <div className={styles.buttonVerticalMiddle}>
        <StickyButton onClick={handleScroll}>
          <BiSolidChevronDown size={64} />
        </StickyButton>
      </div>
    </div>
  );
};

export default ScrollableContent;
