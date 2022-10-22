import React, { useEffect, useState } from "react";
import { Banner, Hits, Catalog } from "../components";

const HomePageLoaded = () => {
  const [hits, setHits] = useState([]);
  const [categories, setCategories] = useState([]);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [offset, setOffset] = useState(6);
  useEffect(() => {
    fetch("http://localhost:7070/api/top-sales")
      .then(res => res.json())
      .then(data => setHits(data))
  }, []);
  useEffect(() => {
    fetch("http://localhost:7070/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, []);
  useEffect(() => {
    fetch("http://localhost:7070/api/items")
      .then(res => res.json())
      .then(data => setItemsToShow(data))
  }, []);
  const showMoreItems = () => {
    setOffset(prevOffset => prevOffset + 6);
    fetch(`http://localhost:7070/api/items?offset=${offset}`)
      .then(res => res.json())
      .then(data => setItemsToShow((prevItems) => {
        return prevItems.concat(data);
      }));
  };
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
