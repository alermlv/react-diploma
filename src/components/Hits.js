import React, { useState, useEffect } from 'react';
import { Card, Preloader } from './';

const Hits = () => {
  const [hits, setHits] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7070/api/top-sales")
      .then(res => res.json())
      .then(data => setHits(data))
  }, []);
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {hits ?
        <div className="row">
          {hits.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      :
        <Preloader />
      }
    </section>
  );
};

export default Hits;