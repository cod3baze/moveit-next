// STATICs
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/eliasallex.png" alt="Elias Alexandre" />

      <div>
        <strong>Elias Alexandre</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;
