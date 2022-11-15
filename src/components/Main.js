import React from 'react';

const Main = ({ children }) => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Main;