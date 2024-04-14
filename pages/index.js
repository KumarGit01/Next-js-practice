import Link from 'next/link';
import { useState, useEffect } from 'react';
import style from '../styles/Home.module.css';
import { useSession } from 'next-auth/react';

export default function Home() {
  const [ata, setData] = useState([]);
  const { data: session } = useSession();

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/data');
      const { peopleData } = await res.json();
      setData(peopleData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on initial render

  const handleDelete = async (id) => {
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
      fetchData(); // Fetch updated data after deletion
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <>
      {session && <h1>Welcome {session.user.name} gg</h1>}
      <Link href='/input' className={style.ll}>Input</Link>
      <button onClick={fetchData} className={style.but}>Fetch</button>
      {ata.map((data) => (
        <div key={data.id}>
          <h2>{data.name}</h2>
          <h3>{data.age}</h3>
          <h3>{data.occupation}</h3>
          <button onClick={() => handleDelete(data.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </>
  );
}
