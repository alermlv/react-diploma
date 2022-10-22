import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, calculateTotals } from '../features/cart/cartSlice';
import { Banner } from '../components';

const Cart = () => {
  const products = useSelector((store) => store.cart.cartItems);
  const total = useSelector((store) => store.cart.total);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
    dispatch(calculateTotals());
  };
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          {products.length > 0 ? <>
            <section className="cart">
              <h2 className="text-center">Корзина</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Размер</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Итого</th>
                    <th scope="col">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <tr key={index}>
                      <td scope="row">{index + 1}</td>
                      <td><a href="/products/1.html">{item.title}</a></td>
                      <td>18 US</td>
                      <td>{item.amount}</td>
                      <td>{item.price} руб.</td>
                      <td>{item.amount * item.price} руб.</td>
                      <td><button onClick={() => handleDelete(item.id)} className="btn btn-outline-danger btn-sm">Удалить</button></td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="5" className="text-right">Общая стоимость</td>
                    <td>{total} руб.</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="order">
              <h2 className="text-center">Оформить заказ</h2>
              <div className="card" style={{maxWidth: "30rem", margin: "0 auto"}}>
                <form className="card-body">
                  <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input className="form-control" id="phone" placeholder="Ваш телефон"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Адрес доставки</label>
                    <input className="form-control" id="address" placeholder="Адрес доставки"/>
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="agreement"/>
                    <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                  </div>
                  <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                </form>
              </div>
            </section>
          </> : <section className="cart">
              <h2 className="text-center">Ваша корзина пуста</h2>
            </section>}
        </div>
      </div>
    </main>
  );
};

export default Cart;