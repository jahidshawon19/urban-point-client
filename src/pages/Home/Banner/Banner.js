import React from 'react';
import banner1 from '../../../img/banner1.jpg';
import banner2 from '../../../img/banner2.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1>Modern House <br />Make Better Life </h1>
                            <p>The smartest way to buy a home.Urban Point is a modular home marketplace that helps you find, compare, and puchase a prefab modular home.</p>
                        </div>
                    </div>
                </div>
            </section>                  
        </>
    );
};

export default Banner;