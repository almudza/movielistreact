import React from "react";
import path from "path";
import PropTypes from "prop-types";

const Card = ({ movie }) => {
  // eslint-disable-next-line no-undef
  const media = path.join(__dirname, "public");
  return (
    <div className="card">
      <img
        src={`${media}/${movie.img.src}`}
        alt={movie.img.src}
        className="card-img-top"
      />
      <div className="card-body">
        <h2 className="card-title">{`#${movie.ranking} - ${movie.title} - ${movie.year}`}</h2>
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

Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    ranking: PropTypes.number,
    distributor: PropTypes.string,
    year: PropTypes.number,
    amount: PropTypes.string,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    }).isRequired
  })
};

export default Card;
