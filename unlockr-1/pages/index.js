// pages/index.js
import Header from '../components/Header';
import styles from '../styles/home.module.css';
import { useRouter } from 'next/router'; // Import useRouter

export default function Home() {
  const router = useRouter(); // Initialize router

  const handleStartNow = () => {
    router.push('/login'); // Navigate to the login page
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.intro}>
          <img
            src="business-startup-character-black-woman.svg"
            alt="Unicorn Image"
            className={styles.image}
          />
          <div className={styles.textBlock}>
            <h1>
              <span className={styles.bold}>Unlockr</span> is a digital time
              capsule platform that allows you to securely store memories,
              messages, and media today, to be unlocked and cherished at a
              future moment of your choosing.
            </h1>
            <button className={styles.startButton} onClick={handleStartNow}>
              Start now!
            </button>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <img src="add-profile.svg" alt="Add notes" />
            <p>Make a Capsule: Add notes, pictures, or videos.</p>
          </div>
          <div className={styles.feature}>
            <img src="image 1.svg" alt="Pick a Date" />
            <p>Pick a Date: Choose when the capsule will open.</p>
          </div>
          <div className={styles.feature}>
            <img src="safe.svg" alt="Save It" />
            <p>Save It: Your capsule stays locked until the date.</p>
          </div>
        </section>
      </main>
    </>
  );
}
