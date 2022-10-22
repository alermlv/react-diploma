import React from "react";
import { Banner, Hits, Catalog } from "../components";

const HomePageLoaded = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <Hits />
          <Catalog />
        </div>
      </div>
    </main>
  );
};

export default HomePageLoaded;
