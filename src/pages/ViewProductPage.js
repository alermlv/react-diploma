import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, calculateTotals, updateLocalStorage } from "../features/cart/cartSlice";

const ViewProduct = () => {
  const [product, setProduct] = useState();
  const [amount, setAmount] = useState(1);
  const cart = useSelector((store) => store.cart.cartItems);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:7070/api/items/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const increaseamount = () => {
    if (amount < 10) setAmount((prevamount) => prevamount + 1);
  };

  const decreaseamount = () => {
    if (amount > 1) setAmount((prevamount) => prevamount - 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, amount }));
    dispatch(calculateTotals());
    dispatch(updateLocalStorage());
    navigate("/cart");
  };

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          {product && (
            <section className="catalog-item">
              <h2 className="text-center">{product.title}</h2>
              <div className="row">
                <div className="col-5">
                  <img
                    src={product.images}
                    className="img-fluid"
                    alt={product.title}
                  />
                </div>
                <div className="col-7">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Артикул</td>
                        <td>{product.sku}</td>
                      </tr>
                      <tr>
                        <td>Производитель</td>
                        <td>{product.manufacturer}</td>
                      </tr>
                      <tr>
                        <td>Цвет</td>
                        <td>{product.color}</td>
                      </tr>
                      <tr>
                        <td>Материалы</td>
                        <td>{product.material}</td>
                      </tr>
                      <tr>
                        <td>Сезон</td>
                        <td>{product.season}</td>
                      </tr>
                      <tr>
                        <td>Повод</td>
                        <td>{product.reason}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-center">
                    <p>
                      Размеры в наличии:
                      {product.sizes &&
                        product.sizes.map(
                          (item) =>
                            item.avalible && (
                              <span
                                key={item.size}
                                className="catalog-item-size selected"
                              >
                                {item.size}
                              </span>
                            )
                        )}
                    </p>
                    <p>
                      Количество:
                      <span className="btn-group btn-group-sm pl-2">
                        <button
                          onClick={decreaseamount}
                          className="btn btn-secondary"
                        >
                          -
                        </button>
                        <span className="btn btn-outline-primary">
                          {amount}
                        </span>
                        <button
                          onClick={increaseamount}
                          className="btn btn-secondary"
                        >
                          +
                        </button>
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="btn btn-danger btn-block btn-lg"
                  >
                    В корзину
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
};

export default ViewProduct;
