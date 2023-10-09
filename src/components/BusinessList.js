import React from 'react';
import Business from './Business';

function BusinessList(props) {
    return (
        <div className="businessList">
            {
            props.businesses.map(business => 
                <Business business={business} key={business.key} />
                )
            }
        </div>
    );
}

export default BusinessList;