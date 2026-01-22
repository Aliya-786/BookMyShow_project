import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { movies } from "./data";
import Movie from "./components/Movie";
import SeatBooking from "./components/SeatBooking";
import "./App.css";
import SelectCity from "./Screens/SelectCity";
import Splash from "./Screens/Splash";

const Stack = createNativeStackNavigator();


function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieList, setMovieList] = useState(movies);

  const handleSelectMovie = (movie) => setSelectedMovie(movie);

  const handleBook = (movieId, seats) => {
    const updatedMovies = movieList.map((m) =>
      m.id === movieId
        ? {
            ...m,
            seats: m.seats.map((seat, i) => (seats.includes(i) ? true : seat)),
          }
        : m
    );
    setMovieList(updatedMovies);
    alert(`Booked seats: ${seats.map((s) => s + 1).join(", ")}`);
    setSelectedMovie(null);
  };

  return (
    <NavigationContainer>
<Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="SelectCity" component={SelectCity} />

    </Stack.Navigator>
        
    <div className="app">
      <h1>BookMyShow Clone</h1>
      {!selectedMovie ? (
        <div className="movie-list">
          {movieList.map((movie) => (
            <Movie key={movie.id} movie={movie} onSelect={handleSelectMovie} />
          ))}
        </div>
      ) : (
        <SeatBooking movie={selectedMovie} onBook={handleBook} />
      )}
    </div>
       
  </NavigationContainer>


  );
  
}


export default App;