import Link from 'next/Link';
import { useState, useEffect } from 'react';
import style from '../../hell/styles/Home.module.css';
import { useSession } from 'next-auth/react';
export default function Home() {
  const [ata, setData] = useState([]);
const {data:session} = useSession();
  const Fetch = async () => {
    const res = await fetch('http://localhost:3000/api/data');
    const { peopleData } = await res.json();
    setData(peopleData);
  };

  const handleD = async (id) => {
    try {
      const response = await fetch('http://localhost:3000/api/data', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id })
      });
      const data = await response.json();
      console.log(data);
      Fetch();
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };


  return (
    <>
    {session && <h1>welCome {session.user.name} gg</h1>}
      <Link href='/input' className={style.ll}>Input</Link>
      <button onClick={Fetch} className={style.but}>Fetch</button>
   {  ata.map((data) => (
        <div key={ata.id}>
          <h2>{ata.name}</h2>
          <h3>{ata.age}</h3>
          <h3>{ata.occupation}</h3>
          <button onClick={() => handleD(data.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </>
  );
}
