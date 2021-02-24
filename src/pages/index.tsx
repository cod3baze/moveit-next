// STATICs
import styles from "../styles/pages/Home.module.css";
// COMPONENTs
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import React from "react";
import Countdown from "../components/Countdown";

import Head from "next/Head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div className={styles.leftContainer}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
