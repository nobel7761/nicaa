'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Index = () => {
  const [data, setData] = useState<{ message: string }>({ message: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3333/api/sample');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // GSAP Animations
    gsap.fromTo(
      '.loading-page',
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1.5,
        delay: 3.5,
      }
    );

    gsap.fromTo(
      '.logo-name',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
  }, []); // Empty dependency array means this will run once when the component mounts

  return (
    <div className="h-[100vh] p-0 m-0 box-border">
      <div className="bg-black text-white h-[100%] w-[100%] flex justify-center items-center relative text-5xl font-bold">
        {loading && 'Loading...'}
        {error && error}
        {data && data.message}
      </div>

      <div className="absolute top-0 left-0 h-[100%] w-[100%] flex flex-col gap-[1.5rem] justify-center items-center bg-[url('/background.jpg')] bg-cover bg-center loading-page">
        <svg
          className="h-[150px] w-[150px] stroke-white fill-transparent stroke-[3px] [stroke-dasharray:4500] animate-draw"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M415.4 512h-95.1L212.1 357.5v91.1L125.7 512H28V29.8L68.5 0h108.1l123.7 176.1V63.5L386.7 0h97.7v461.5zM38.8 35.3V496l72-52.9V194l215.5 307.6h84.8l52.4-38.2h-78.3L69 13zm82.5 466.6l80-58.8v-101l-79.8-114.4v220.9L49 501.9h72.3zM80.6 10.8l310.6 442.6h82.4V10.8h-79.8v317.6L170.9 10.8zM311 191.7l72 102.8V15.9l-72 53v122.7z" />
        </svg>

        <div className="h-[30px] overflow-hidden">
          <div className="text-white text-xl uppercase ml-5 [letter-spacing:12px] logo-name">
            nicaa
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
