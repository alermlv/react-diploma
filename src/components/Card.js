import React from 'react';

const Card = (props) => {
  const { images, title, price } = props;
  return (
    <div className="col-4">
      <div className="card">
        <img src={images[0]}
          className="card-img-top img-fluid" alt={title}/>
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price} руб.</p>
          <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
        </div>
      </div>
    </div>
  );
};

export default Card;