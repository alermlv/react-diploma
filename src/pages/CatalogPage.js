import React from 'react';
import { Catalog } from '../components';

const CatalogPage = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Catalog />
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;