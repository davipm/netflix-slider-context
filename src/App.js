import React from 'react';
import Slider from "./components/NetflixSlider";

function App() {
  const movies = [
    {
      id: 1,
      image: 'https://i.ytimg.com/vi/5qEUC1iE1fI/maxresdefault.jpg',
      imageBg: 'https://i.ytimg.com/vi/5qEUC1iE1fI/maxresdefault.jpg',
      title: '1983'
    },
    {
      id: 2,
      image: 'https://i.ytimg.com/vi/5qEUC1iE1fI/maxresdefault.jpg',
      imageBg: 'https://i.ytimg.com/vi/5qEUC1iE1fI/maxresdefault.jpg',
      title: 'Russian doll'
    },
    {
      id: 3,
      image: 'https://i.ytimg.com/vi/5qEUC1iE1fI/maxresdefault.jpg',
      imageBg: 'https://i.ytimg.com/vi/5qEUC1iE1fI/maxresdefault.jpg',
      title: 'The rain',
    },
    {
      id: 4,
      image: 'https://i.ytimg.com/vi/5qEUC1iE1fI/maxresdefault.jpg',
      imageBg: 'https://i.ytimg.com/vi/5qEUC1iE1fI/maxresdefault.jpg',
      title: 'Sex education'
    },
    {
      id: 5,
      image: 'https://i.ytimg.com/vi/5qEUC1iE1fI/maxresdefault.jpg',
      imageBg: 'https://i.ytimg.com/vi/5qEUC1iE1fI/maxresdefault.jpg',
      title: 'Elite'
    },
    {
      id: 6,
      image: 'https://i.ytimg.com/vi/5qEUC1iE1fI/maxresdefault.jpg',
      imageBg: 'https://i.ytimg.com/vi/5qEUC1iE1fI/maxresdefault.jpg',
      title: 'Black mirror'
    }
  ];

  return (
    <div className="App">
      <Slider>
        {movies.map(movie => (
          <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
        ))}
      </Slider>
      <Slider>
        {movies.map(movie => (
          <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
        ))}
      </Slider>
    </div>
  );
}

export default App;
