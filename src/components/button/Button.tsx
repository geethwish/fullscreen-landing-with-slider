import { FC, ReactElement, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonsProps {
  type?: "button" | "reset" | "submit";
  className?: string;
  children: ReactNode | ReactElement | string;
}
const Button: FC<ButtonsProps> = ({ type, className, children }) => {
  return (
    <button type={type ?? "button"} className={`${className} ${styles.button}`}>
      {children}
    </button>
  );
};

export default Button;
