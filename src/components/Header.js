import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addSearch } from "../features/cart/searchSlice";

const Header = () => {
  const { amount } = useSelector((store) => store.cart);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearchForm = () => {
    const form = document.querySelector('[data-id="search-form"]');
    const input = document.querySelector(".form-control");
    if (search.length === 0) {
      form.classList.toggle("invisible");
      input.focus();
    } else {
      form.classList.toggle("invisible");
      dispatch(addSearch(search));
      navigate(`/catalog`);
    }
  };
  const changeSearchInput = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src="./img/header-logo.png" alt="Bosa Noga" />
            </a>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" end>
                    Главная
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/catalog">
                    Каталог
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    О магазине
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contacts">
                    Контакты
                  </NavLink>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div
                    onClick={handleSearchForm}
                    data-id="search-expander"
                    className="header-controls-pic header-controls-search"
                  ></div>
                  {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">{amount}</div>
                    <div className="header-controls-cart-menu">
                      <Link className="header-btn" to="/cart" />
                    </div>
                  </div>
                </div>
                <form
                  data-id="search-form"
                  className="header-controls-search-form form-inline invisible"
                >
                  <input
                    name="search"
                    value={search}
                    onChange={changeSearchInput}
                    className="form-control"
                    placeholder="Поиск"
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
