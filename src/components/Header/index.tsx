import Image from 'next/image';
import duolingoForSchoolsImg from '../../../public/header-image.svg';
import styles from '../../../styles/Header.module.css';


export default function Header(){
  return (
    <header className={styles.header}>
      <aside>
        <Image src={duolingoForSchoolsImg} alt="Duolingo for schools" />
      </aside>
    </header>
  )
}