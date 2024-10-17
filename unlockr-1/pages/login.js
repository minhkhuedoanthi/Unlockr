// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import styles from '../styles/auth.module.css';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // const res = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    // });

    // if (res.ok) {
    //   router.push('/createCapsule');
    // } else {
    //   alert('Invalid credentials. Please try again.');
    // }
    router.push('/createCapsule');
  };

  return (
    <>
      <Header />
      <div className={styles.authContainer}>
        <div className={styles.authBox}>
          <div className={styles.formSection}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </form>
            <p className={styles.authText}>
              Don't have an account?{' '}
              <span className={styles.link} onClick={() => router.push('/register')}>
                Register here
              </span>
            </p>
          </div>
          <div className={styles.illustration}>
            <img src="/login-illustration.svg" alt="Login Illustration" />
          </div>
        </div>
      </div>
    </>
  );
}
