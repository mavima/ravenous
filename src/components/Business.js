import React from 'react';
import defimg from '../images/defimg.jpg';

const singleBusiness = {
    img: {defimg},
    name: 'Fancy restaurant',
    address: '5 Battery Street',
    city: 'San Francisco',
    state: 'California',
    zipcode: '1234',
    category: 'Fine dining',
    rating: 5,
    reviews: 55

}

function Business(props) {
    return (
        <div className="businessCard">
            <img alt={singleBusiness.name} src={defimg}/>
            <h3>{props.business.name}</h3>
            <p>{props.business.address}</p>
            <p>{props.business.city}</p>
            <p>Rating: {props.business.rating}</p>
        </div>
    );
}

export default Business;