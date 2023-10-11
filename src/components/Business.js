import React from 'react';
import defimg from '../images/defimg.jpg';


function Business(props) {
    return (
        <div className="businessCard">
            <div className="img-box">
                <img alt={props.business.name} src={props.business.imageSrc}/>
            </div>
            <h3>{props.business.name}</h3>
            <p>{props.business.address}</p>
            <p>{props.business.city}</p>
            <p>Rating: {props.business.rating}</p>
            <p>{props.business.category}</p>
        </div>
    );
}

export default Business;