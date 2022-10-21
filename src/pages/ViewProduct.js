import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewProduct = () => {
  const [currentProduct, setCurrrentProduct] = useState([]);
  const [count, setCount] = useState(1);
  const { title, images, sku, manufacturer, color, material, season, reason, sizes } = currentProduct;
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:7070/api/items/${params.id}`)
      .then(res => res.json())
      .then(data => setCurrrentProduct(data));
  }, []);
  const increaseCount = () => {
    if (count < 10) setCount((prevCount) => prevCount + 1);
  };
  const decreaseCount = () => {
    if (count > 1) setCount((prevCount) => prevCount - 1);
  };
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <div className="banner">
            <img src=".././img/banner.jpg" className="img-fluid" alt="К весне готовы!"/>
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
          <section className="catalog-item">
            <h2 className="text-center">{title}</h2>
            <div className="row">
              <div className="col-5">
                <img src={images}
                    className="img-fluid" alt={title}/>
              </div>
              <div className="col-7">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Артикул</td>
                      <td>{sku}</td>
                    </tr>
                    <tr>
                      <td>Производитель</td>
                      <td>{manufacturer}</td>
                    </tr>
                    <tr>
                      <td>Цвет</td>
                      <td>{color}</td>
                    </tr>
                    <tr>
                      <td>Материалы</td>
                      <td>{material}</td>
                    </tr>
                    <tr>
                      <td>Сезон</td>
                      <td>{season}</td>
                    </tr>
                    <tr>
                      <td>Повод</td>
                      <td>{reason}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center">
                  <p>Размеры в наличии:
                    {sizes && sizes.map((item) => (
                      item.avalible && <span key={item.size} className="catalog-item-size selected">{item.size}</span> 
                    ))}
                  </p>
                  <p>Количество: 
                    <span className="btn-group btn-group-sm pl-2">
                      <button onClick={decreaseCount} className="btn btn-secondary">-</button>
                      <span className="btn btn-outline-primary">{count}</span>
                      <button onClick={increaseCount} className="btn btn-secondary">+</button>
                    </span>
                  </p>
                </div>
                <button className="btn btn-danger btn-block btn-lg">В корзину</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ViewProduct;