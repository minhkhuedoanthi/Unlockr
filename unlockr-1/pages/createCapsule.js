// pages/createCapsule.js
import { useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/capsule.module.css';

export default function CreateCapsule() {
  const [step, setStep] = useState(1); // Step 1: Make Capsule, Step 2: Set Time
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [media, setMedia] = useState(null);

  const handleNext = () => {
    setStep(2); // Switch to Set Time view
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const unlockDate = new Date(`${year}-${month}-${date}`);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('note', note);
    formData.append('unlockDate', unlockDate);
    if (media) formData.append('media', media);

    const res = await fetch('/api/capsules/create', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('Successfully saved capsule!');
    } else {
      alert('Failed to save the capsule. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className={styles.capsuleContainer}>
        {step === 1 ? (
          <div className={styles.formSection}>
            <h1>Make Capsule</h1>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <div className={styles.uploadBox}>
              <label htmlFor="mediaUpload">Media Upload</label>
              <input
                type="file"
                id="mediaUpload"
                onChange={(e) => setMedia(e.target.files[0])}
              />
            </div>
            <button className={styles.nextButton} onClick={handleNext}>
              Next
            </button>
          </div>
        ) : (
          <div className={styles.formSection}>
            <h1>Set Time</h1>
            <input
              type="text"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
            <input
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <button className={styles.submitButton} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  );
}
