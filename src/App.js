import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';

const businesses = [
  {
    name: "Sushi place",
    key: 1,
    address: "Street 1",
    city: "New York",
    rating: 5,
    reviews: 66
  },
  {
    name: "Pizza place",
    key: 2,
    address: "Street 2",
    city: "New York",
    rating: 4,
    reviews: 55
  },
  {
    name: "Bowl place",
    key: 3,
    address: "Street 1",
    city: "Washington",
    rating: 4.8,
    reviews: 88
  },
  {
    name: "Taco place",
    key: 4,
    address: "Street 6",
    city: "Miami",
    rating: 3.8,
    reviews: 77
  },
  

]

function App() {



  return (
    <div className="App">
      <SearchBar />
      <BusinessList businesses = {businesses}/>


    </div>
  );
}

export default App;
