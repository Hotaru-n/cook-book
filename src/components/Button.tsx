import { FC, ReactNode, MouseEvent } from "react";

interface ButtonProps {
  style: string;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ style, children = null, onClick }) => (
  <button onClick={onClick} className={style}>
    {children}
  </button>
);

export default Button;
