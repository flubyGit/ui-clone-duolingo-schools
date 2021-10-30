import styles from "../../../styles/Button.module.css";

interface ButtonProps {
  label?: string;
  primaryBackgroundColor?: boolean;
}
export default function Button({
  label = "GET STARTED",
  primaryBackgroundColor,
}: ButtonProps) {
  const secondaryButtonStyle = `${styles.button} ${styles.buttonSecondary}`;
  const principalButtonStyle = primaryBackgroundColor
    ? `${styles.button} ${styles.buttonPrincipal}`
    : secondaryButtonStyle;

  return (
    <button type="button" className={principalButtonStyle}>
      {label}
    </button>
  );
}
