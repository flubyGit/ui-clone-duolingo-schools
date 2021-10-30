import styles from "../../../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ol className={styles.containerList}>
        <li>Duolingo</li>
        <li>About</li>
        <li>Carrers</li>
        <li>Apps</li>
        <li>Help</li>
        <li>Terms</li>
        <li>Privacy</li>
      </ol>
    </footer>
  );
}
