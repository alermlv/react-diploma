import React from 'react';
import { Banner, Catalog } from '../components';

const Catalog = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <Catalog />
        </div>
      </div>
    </main>
  );
};

export default Catalog;