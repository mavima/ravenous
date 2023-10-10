import React from 'react';
import Business from './Business';

function BusinessList(props) {
    if (props.businesses) {
        return (
            <div className="businessList">
                {
                props.businesses.map(business => 
                    <Business business={business} key={business.id} />
                    )
                }
            </div>
        );
    } else {
        return (
            <p className="empty-list">Unfortunately there are no restaurants available with your search. Try something else.</p>
        )
    }

}

export default BusinessList;