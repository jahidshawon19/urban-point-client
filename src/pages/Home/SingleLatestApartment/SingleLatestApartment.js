import React from 'react';
import { Link } from 'react-router-dom';

const SingleLatestApartment = (props) => {
    const {_id,place, room,cost,apartmentType, image} = props.laData
    return (
        <div className="col-lg-4 mt-2">
        <div className="card-deck">
        <div className="card">
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title">{place}</h5>
            <p className="card-text">{room}</p>
            <p className="card-text">{cost}$ per day</p>
            <p className="card-text"><small className="text-muted">{apartmentType}</small></p>
            <Link to={`/booking/${_id}`} ><button className="btn btn-outline-warning btn-block">Book Now</button></Link>
            </div>
        </div>
        </div>
</div>
    );
};

export default SingleLatestApartment;