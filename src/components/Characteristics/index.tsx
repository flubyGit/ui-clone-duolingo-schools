import Image from "next/image";
import clockPalleteImg from "../../../public/clock-pallete.svg";
import computerPhoneImg from "../../../public/computer-phone.svg";
import cardFruitsImg from "../../../public/fruits-card.svg";
import styles from "../../../styles/Characteristics.module.css";

export default function Characteristics() {
  return (
    <section className={`${styles.characteristics} ${styles.containerPadding}`}>
      <aside className={styles.container}>
        <Image src={computerPhoneImg} alt="Images phone and computer" />
        <div>
          <h2>Fun and 100% free</h2>
          <p className={styles.characteristicsText}>
            Access our extensive and engaging language education curriculum for
            free, on any device — inside the classroom, at home, or on the go.
          </p>
        </div>
      </aside>
      <hr />
      <aside className={`${styles.secondContainer}`}>
        <Image src={cardFruitsImg} alt="Image apple card and orange" />
        <div className={styles.containerTextComplementsCurriculum}>
          <h2>Complements your curriculum</h2>
          <p>
            Tailor Duolingo to your teaching objectives with customizable
            assignments and lessons, keeping your students learning both in and
            out of the classroom.
          </p>
        </div>
      </aside>
      <hr />
      <aside className={`${styles.container}`}>
        <Image src={clockPalleteImg} alt="Image clock and palette" />
        <div>
          <h2>Personalized and self-paced</h2>
          <p className={styles.textEachLanguage}>
            Meet each language learner exactly where they are and increase their
            learning independence with assignments powered by our personalized
            learning engine.
          </p>
        </div>
      </aside>
    </section>
  );
}
