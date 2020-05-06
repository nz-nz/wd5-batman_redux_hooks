import React from 'react';
import PropTypes from 'prop-types';

function DetailsPage(props) {
    return (
        <div>
            <h1>Show Details</h1>
            <h2>{ props.match.params.code }</h2>
        </div>
    );
}

DetailsPage.propTypes = {

};

export default DetailsPage;