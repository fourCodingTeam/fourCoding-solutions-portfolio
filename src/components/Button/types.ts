export type ButtonColors = "primary" | "secondary" | "hollow";

export type ButtonProps = {
  color?: ButtonColors;
  text: string;
  onClick?: () => void;
};
