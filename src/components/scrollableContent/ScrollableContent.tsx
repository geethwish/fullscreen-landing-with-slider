import React, { useEffect, useState } from "react";
import styles from "./ScrollableContent.module.scss";
import bg from "../../assets/images/bg1.webp";
import earth from "../../assets/images/earth.jpeg";
import StickyButton from "../stickyButton/StickyButton";
import { BiSolidChevronDown } from "react-icons/bi";
import Slider from "../slider/Slider";
import axios from "axios";
import { SliderDataProps } from "./ScrollableContent.types";

const ScrollableContent = () => {
  const [data, setData] = useState<SliderDataProps[] | []>([]);

  const handleScroll = () => {};

  useEffect(() => {
    axios
      .get("./sliderContent.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        <StickyButton onClick={handleScroll} path="#section2">
          <BiSolidChevronDown size={64} />
        </StickyButton>
      </div>
      <div id="section2" className={styles.section2}>
        <img src={earth} className={styles.bgImage} alt="backgroundImage" />
        <div className={styles.sliderContainer}>
          <div className={styles.section2contentWrapper}>
            <div className={styles.title}>
              <h1>DONEC NEC JUSTO</h1>
            </div>
            <div className={styles.sliderWrapper}>
              <Slider data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableContent;
