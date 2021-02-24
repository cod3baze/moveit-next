// STATICs
import styles from "../styles/pages/Home.module.css";
// COMPONENTs
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div className={styles.leftContainer}>
          <Profile />
          <CompletedChallenges />
        </div>
        <div></div>
      </section>
    </div>
  );
}
