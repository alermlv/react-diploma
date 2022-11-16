import React, { useState, useEffect } from 'react';
import { Card } from './';

const Catalog = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [offset, setOffset] = useState(6);
  useEffect(() => {
    fetch("http://localhost:7070/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, []);
  useEffect(() => {
    fetch("http://localhost:7070/api/items")
      .then((res) => res.json())
      .then((data) => setItemsToShow(data));
    if (currentCategory) {
      fetch(`http://localhost:7070/api/items?categoryId=${currentCategory}`)
        .then((res) => res.json())
        .then((data) => setItemsToShow(data));
    }
  }, [currentCategory]);
  const showCategory = (id) => {
    setCurrentCategory(id);
  }
  const showMoreItems = () => {
    setOffset(prevOffset => prevOffset + 6);
    fetch(`http://localhost:7070/api/items?offset=${offset}`)
      .then(res => res.json())
      .then(data => setItemsToShow((prevItems) => {
        return prevItems.concat(data);
      }));
    if (currentCategory) {
      fetch(
        `http://localhost:7070/api/items?categoryId=${currentCategory}&offset=${offset}`
      )
        .then((res) => res.json())
        .then((data) =>
          setItemsToShow((prevItems) => {
            return prevItems.concat(data);
          })
        );
    }
  };
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {itemsToShow.length > 0 ? (
        <>
          <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
              <a
                onClick={(event) => {
                  event.preventDefault();
                  showCategory(null);
                }}
                className="nav-link active"
                href="#"
              >
                Все
              </a>
            </li>
            {categories.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  onClick={(event) => {
                    event.preventDefault();
                    showCategory(item.id);
                  }}
                  className="nav-link"
                  href="#"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="row">
            {itemsToShow.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button onClick={showMoreItems} className="btn btn-outline-primary">
              Загрузить ещё
            </button>
          </div>
        </>
      ) : (
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </section>
  );
};

export default Catalog;