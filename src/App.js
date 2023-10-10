import React, {useState} from 'react';
import YelpSearch from './utils/YelpSearch.js';


import './App.css';
import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
      const businesses = await YelpSearch.search(term, location, sortBy);
      setBusinesses(businesses);
  };
  return (
    <div className="App">
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses = {businesses}/>
    </div>
  );
}

export default App;
