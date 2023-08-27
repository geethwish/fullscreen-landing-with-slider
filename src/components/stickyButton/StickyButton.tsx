import React, { ReactElement, ReactNode, FC } from "react";
import styles from "./StickyButton.module.scss";

interface StickyButtonProps {
  children?: ReactNode | ReactElement | string;
  onClick?: () => void;
  className?: string;
  path: string;
}

const StickyButton: FC<StickyButtonProps> = ({ children, onClick, path }) => {
  return (
    <a className={styles.stickyButton} onClick={onClick} href={`${path}`}>
      {children}
    </a>
  );
};

export default StickyButton;
