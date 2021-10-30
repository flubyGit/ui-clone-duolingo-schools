import type { NextPage } from "next";
import React from "react";
import Characteristics from "../src/components/Characteristics";
import DuolingoClassRoom from "../src/components/DuolingoClassroom";
import Footer from "../src/components/Footer";
import GetStartedLanguage from "../src/components/GetStartedLanguage";
import Header from "../src/components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Header />
      <GetStartedLanguage />
      <Characteristics />
      <DuolingoClassRoom />
      <Footer />
    </main>
  );
};

export default Home;
