import Image from "next/image";
import peoplesLearningLanguageImg from "../../../public/peoples-learning.svg";
import styles from "../../../styles/GetStartedLanguage.module.css";
import Button from "../Button";

export default function GetStartedLanguage() {
  return (
    <section className={styles.startedLanguage}>
      <div className={styles.infosStartedLanguage}>
        <h1 className={styles.titleStartedLanguage}>
          The best way to help you teach a language, completely free!
        </h1>
        <p className={styles.textStartedLanguage}>
          <strong>Duolingo for Schools</strong> is your free partner in helping
          every student learn a new language. We use fun, bite-sized lessons, in
          a rich, gamified environment to help you meet each student at their
          own level.
        </p>
        <Button primaryBackgroundColor />
      </div>
      <div>
        <Image
          src={peoplesLearningLanguageImg}
          alt="Peoples learning language"
        />
      </div>
    </section>
  );
}
