import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter
import { useEffect, useState } from 'react'; // Import React hooks
import styles from '../styles/header.module.css';

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  useEffect(() => {
    // Check login state (e.g., from localStorage or session)
    const token = localStorage.getItem('authToken'); // Example: Use JWT token
    setIsLoggedIn(!!token); // If token exists, user is logged in
  }, []);

  const handleLinkClick = (path) => {
    if (!isLoggedIn) {  // Change to isLoggedIn when the login api work
      router.push(path); // If logged in, navigate to the desired page
    } else {
      router.push('/login'); // If not logged in, redirect to login
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Unlockr.</div>
      <nav>
        <button
          className={styles.navLink}
          onClick={() => handleLinkClick('/createCapsule')}
        >
          Create Time Capsule
        </button>
        <button
          className={styles.profileButton}
          onClick={() => handleLinkClick('/profile')}
        >
          <div className={styles.profileIcon}>👤</div>
        </button>
      </nav>
    </header>
  );
}

