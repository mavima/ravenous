import React, {useState} from 'react';
import styles from "./SearchBar.module.css";


function SearchBar({}) {

    const [location, setLocation] = useState("");
    const [term, setTerm] = useState("");
    const [sortBy, setSortBy] = useState("best_match");
    const [active, setActive] = useState(false);

    const activate = (e) => {
        setActive(e);
    }

    const sortByOptions = {
        "Best Match": "best_match",
        "Highest Rated": "rating",
        "Most Reviewed": "review_count",
      };

    const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
        return styles.active;
    }
    return "";
    };

    const handleSortByChange = (sortByOptions) => {
        setSortBy(sortByOptions);
    }


    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return (
            <li 
                key={sortByOptionValue} 
                className={getSortByClass(sortByOptionValue)} 
                onClick={() => {
                    handleSortByChange(sortByOptionValue);
                  }}>
                    {sortByOption}
            </li>
            );
        });
    };
    
    const handleChange = ({target}) => {
        const {value} = target;
        target.id === "location" ? setLocation(value) : setTerm(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const searching = e.target.querySelector('input[type="query"]').value;
        console.log(`Searching Yelp for ${term} in ${location}`);
    }



    return (
        <div className="header">
            <div className="searchBar">
                <div >
                    <ul className='options'>{renderSortByOptions()}</ul>
                </div>
                <form className='searchForm' onSubmit={handleSubmit}>
                    <div className="inputs">
                        <input id="term"type="query" className="input-box" placeholder="Looking for something?" onChange={handleChange}/>
                        <input id="location" type="query" className="input-box" placeholder="Location" onChange={handleChange}/>
                    </div>
                    <div className="submit-box">
                        <input type="submit" className="submit-btn" value="Let's go"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchBar;