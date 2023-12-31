import { FC } from "react";

// import styles
import style from "./Slider.module.scss";

interface SliderCardProps {
  title: string;
  content: string;
}

const SliderCard: FC<SliderCardProps> = ({ title, content }) => {
  return (
    <div className={style.card}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default SliderCard;
