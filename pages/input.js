import { useState, useEffect } from 'react';
import style from '../styles/header.module.css';
import styles from '../../hell/styles/Home.module.css';
import Footer from '../components/Footer';
import { signIn, useSession } from 'next-auth/react';

const Input = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: ''
  });

  const { data: session, status } = useSession();
console.log(status)
  useEffect(() => {
    if (status === 'loading') return; // Wait for session to load

    if (!session) {
      signIn(); // Redirect to sign-in if not authenticated
    }
  }, [session, status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: formData })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <>
      <h1 className={style.head}>This is the input page</h1>
      <input className={style.input} type="text" placeholder="NAME" name="name" onChange={handleChange} /><br /><br />
      <input className={style.input} type="text" placeholder="AGE" name="age" onChange={handleChange} /><br /><br />
      <input className={style.input} type="text" placeholder="OCCUPATION" name="occupation" onChange={handleChange} />
      <button className={styles.but} onClick={handleSubmit}>Submit</button>
      <Footer />
    </>
  );
};

export default Input;

Input.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
