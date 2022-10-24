import React from 'react';

const Main = ({ children }) => {
  return (
    <main class="container">
      <div class="row">
        <div class="col">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Main;