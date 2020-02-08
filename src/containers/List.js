import React, { Component } from "react";
import Card from "../components/Card/Card";

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };
  }
  async componentDidMount() {
    const movies = await fetch(
      `https://raw.githubusercontent.com/PacktPublishing/React-Projects/ch1/assets/data.json`
    );
    const moviesJSON = await movies.json();
    console.log(moviesJSON);

    if (moviesJSON) {
      this.setState({
        data: moviesJSON,
        loading: false
      });
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <div className="row">
          {data.map(movie => (
            <div key={movie.id} className="col-sm-6 col-lg-3">
              <Card movie={movie} />
            </div>
          ))}
        </div>
      </div>
    );
    // data.map(movie => <Card key={movie.id} movie={movie} />);
  }
}

export default List;
