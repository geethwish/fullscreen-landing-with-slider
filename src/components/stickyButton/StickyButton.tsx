import React, { ReactElement, ReactNode, FC } from "react";
import styles from "./StickyButton.module.scss";

interface StickyButtonProps {
  children?: ReactNode | ReactElement | string;
}

const StickyButton: FC<StickyButtonProps> = ({ children }) => {
  return <div className={styles.stickyButton}>{children}</div>;
};

export default StickyButton;
