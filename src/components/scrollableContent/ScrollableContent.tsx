import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BiSolidChevronDown } from "react-icons/bi";
import { SliderDataProps } from "./ScrollableContent.types";
import bg from "../../assets/images/bg1.webp";
import earth from "../../assets/images/earth.jpeg";
import StickyButton from "../stickyButton/StickyButton";
import Slider from "../slider/Slider";
import { updatePage } from "../../redux/slices/navbar.slice";

// styles
import styles from "./ScrollableContent.module.scss";

const ScrollableContent = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState<SliderDataProps[] | []>([]);

  // add page name when click on scroll button
  const handleScroll = () => {
    dispatch(updatePage("DISCOVER MORE"));
  };

  useEffect(() => {
    // fet slider data from json file
    axios
      .get("./sliderContent.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpdatePage = (pageName: string | null) => {
    dispatch(updatePage(pageName));
  };

  return (
    <div className={styles.container}>
      <div
        onMouseEnter={() => handleUpdatePage("")}
        onMouseLeave={() => handleUpdatePage("DISCOVER MORE")}
      >
        <img src={bg} className={styles.bgImage} alt="backgroundImage" />
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <h1>
              Lorem <span className="underline">ipsum</span> dolor
            </h1>
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
      </div>

      <div
        id="section2"
        className={styles.section2}
        onMouseLeave={() => handleUpdatePage("")}
        onMouseEnter={() => handleUpdatePage("DISCOVER MORE")}
      >
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
