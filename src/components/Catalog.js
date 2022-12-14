import React, { useState, useEffect } from "react";
import { Card } from "./";
import { useSelector, useDispatch } from "react-redux";
import { addSearch } from "../features/cart/searchSlice";

const Catalog = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [offset, setOffset] = useState(6);
  const { search } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:7070/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const showCategory = (id) => {
    setCurrentCategory(id);
  };

  useEffect(() => {
    fetch("http://localhost:7070/api/items")
      .then((res) => res.json())
      .then((data) => setItemsToShow(data));
    if (currentCategory) {
      fetch(`http://localhost:7070/api/items?categoryId=${currentCategory}`)
        .then((res) => res.json())
        .then((data) => setItemsToShow(data));
    }
    if (search) {
      fetch(`http://localhost:7070/api/items?q=${search}`)
        .then((res) => res.json())
        .then((data) => setItemsToShow(data));
    }
    if (currentCategory && search) {
      fetch(
        `http://localhost:7070/api/items?categoryId=${currentCategory}&q=${search}`
      )
        .then((res) => res.json())
        .then((data) => setItemsToShow(data));
    }
  }, [currentCategory, search]);

  const showMoreItems = async () => {
    setOffset((prevOffset) => prevOffset + 6);
    const response = await fetch(
      `http://localhost:7070/api/items?offset=${offset}`
    );
    const data = await response.json();
    setItemsToShow((prevItems) => {
      return prevItems.concat(data);
    });
    if (currentCategory) {
      const response = await fetch(
        `http://localhost:7070/api/items?categoryId=${currentCategory}&offset=${offset}`
      );
      const data = await response.json();
      setItemsToShow((prevItems) => {
        return prevItems.concat(data);
      });
    }
  };

  const changeSearch = (event) => {
    const { value } = event.target;
    dispatch(addSearch(value));
  };

  return (
    <section className="catalog">
      <h2 className="text-center">??????????????</h2>
      <form className="catalog-search-form form-inline">
        <input
          className="form-control"
          placeholder="??????????"
          onChange={changeSearch}
          value={search}
        />
      </form>
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
                ??????
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
              ?????????????????? ??????
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
