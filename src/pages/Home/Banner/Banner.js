import React from 'react';
import banner1 from '../../../img/banner1.jpg';
import banner2 from '../../../img/banner2.jpg';

const Banner = () => {
    return (
        <div>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                       
                        <img className="d-block w-100" src={banner1} alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>FIND YOUR PROPERTY</h1>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi eos obcaecati fuga aliquid aliquam quas sint at delectus soluta odit tempore assumenda quo, qui eius beatae illum dicta placeat.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={banner2} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Welcome To Your New Home</h1>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi eos obcaecati fuga aliquid aliquam quas sint at delectus soluta odit tempore assumenda quo, qui eius beatae illum dicta placeat.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={banner1} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Go On, Unpack Your Life Here</h1>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi eos obcaecati fuga aliquid aliquam quas sint at delectus soluta odit tempore assumenda quo, qui eius beatae illum dicta placeat.</p>
                        </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>            
        </div>
    );
};

export default Banner;