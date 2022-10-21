import React, { useEffect, useState } from "react";
import Card from "../components/Card";

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
          <div className="banner">
            <img
              src="./img/banner.jpg"
              className="img-fluid"
              alt="К весне готовы!"
            />
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
          {hits.length > 0 && <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
              {hits.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </div>
          </section>}
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            {categories.length > 0 && <ul className="catalog-categories nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Все
                </a>
              </li>
              {categories.map((item) => (
                <li key={item.id} className="nav-item">
                  <a className="nav-link" href="#">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>}
            <div className="row">
              {itemsToShow && itemsToShow.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </div>
            <div className="text-center">
              <button onClick={showMoreItems} className="btn btn-outline-primary">Загрузить ещё</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default HomePageLoaded;
