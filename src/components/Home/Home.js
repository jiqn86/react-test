import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
  CarouselControl,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Movies from '../Movies/Movies';

function Home({ movies }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === movies.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? movies.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = movies.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.id}
    >
      <img src={item.image} alt={item.name} />
      <div className="carousel-options">
        <CarouselCaption captionText={item.name} captionHeader={item.name} />
        <Link className="showOnTop" to={`movie/${item.id}`}>See More</Link>
      </div>
    </CarouselItem>
  ));

  return (
    <div className="container">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={movies}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <div className="featured-items">
        <h3>Featured Products</h3>
        <hr />
        <div className="featured-movie">
          {movies.map((movie) => (
            <Movies key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.getMovies.data.filter((movie) => movie.featured),
});

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      category: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(Home);
