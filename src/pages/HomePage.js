import React from "react";
import { Hits, Catalog } from "../components";

const HomePageLoaded = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Hits />
          <Catalog />
        </div>
      </div>
    </main>
  );
};

export default HomePageLoaded;
