// pages/register.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import styles from '../styles/auth.module.css';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      alert('Registration successful! You can now log in.');
      router.push('/login');
    } else {
      alert('Registration failed. Please try again.');
    }
    router.push('/login');
  };

  return (
    <>
      <Header />
      <div className={styles.authContainer}>
        <div className={styles.authBox}>
          <div className={styles.formSection}>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
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
              <button type="submit">Register</button>
            </form>
            <p className={styles.authText}>
              Already have an account?{' '}
              <span className={styles.link} onClick={() => router.push('/login')}>
                Login here
              </span>
            </p>
          </div>
          <div className={styles.illustration}>
            <img src="/register-illustration.svg" alt="Register Illustration" />
          </div>
        </div>
      </div>
    </>
  );
}
