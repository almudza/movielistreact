import React from "react";
import path from "path";

const Card = ({ movie }) => {
  const media = path.join(__dirname, "public");
  return (
    <div className="card">
      <img
        src={`${media}/${movie.img.src}`}
        alt={movie.img.src}
        className="card-img-top"
      />
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {`Distributor: ${movie.distributor}`}
          </li>
          <li className="list-group-item">{`Amount : ${movie.amount}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
