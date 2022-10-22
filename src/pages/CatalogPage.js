import React from 'react';
import { Banner, Catalog } from '../components';

const CatalogPage = () => {
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

export default CatalogPage;