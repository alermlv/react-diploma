import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const { id, images, title, price } = props;
  const navigate = useNavigate();

  const showViewProduct = () => {
    navigate(`/catalog/${id}`);
  };

  return (
    <div className="col-4">
      <div className="card">
        <img src={images[0]}
          className="card-img-top img-fluid" alt={title}/>
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price} руб.</p>
          <a onClick={showViewProduct} className="btn btn-outline-primary">Заказать</a>
        </div>
      </div>
    </div>
  );
};

export default Card;