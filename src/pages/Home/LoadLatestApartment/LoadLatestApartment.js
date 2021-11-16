import React from 'react';
import { useEffect, useState } from 'react';
import SingleLatestApartment from '../SingleLatestApartment/SingleLatestApartment';

const LoadLatestApartment = () => {
    const [latestApartment, setLatestApartment] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-hollows-67176.herokuapp.com/latestApartment')
            .then(res => res.json())
            .then(data => setLatestApartment(data))
    }, [])
    return (

        <section className="py-5">
            <div className="container">
                <h2 className="text-center font-weight-bold text-secondary">Rent A Latest Apartment</h2>
                <div className="row mt-5">

                    {
                        latestApartment.map(la => <SingleLatestApartment

                            key={la._id}
                            laData={la}
                        >

                        </SingleLatestApartment>)
                    }

                </div>
            </div>
        </section>

    );
};

export default LoadLatestApartment;




