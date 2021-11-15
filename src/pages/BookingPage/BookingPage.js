import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer'
import './BookingPage.css'
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
const BookingPage = () => {
    const {id} = useParams()
    const [aparment, setApartment] = useState({})
    
    const {user} = useAuth()


    useEffect(()=>{
        const url = `https://enigmatic-hollows-67176.herokuapp.com/latestApartment/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setApartment(data))
    }, [])


    

    

    const placeRef = useRef()
    const costRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef() 

    const handleBooking = e =>{

        const place = placeRef.current.value 
        const cost = costRef.current.value 
        const email = emailRef.current.value
        const phone = phoneRef.current.value
        const address = addressRef.current.value 


        const newBooking = {place, cost, email, phone, address}

        fetch('https://enigmatic-hollows-67176.herokuapp.com/booking', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking) 
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('We Recevied Your Booking. We Will Contact You Soon. Thank You.')
            }
        })

        e.preventDefault()
    }


    return (
        <>
            <Navbar></Navbar>
                <section className="py-5" id="booking-banner">
                    <h1 className="text-light text-center">Cozy apartment with a glamour! </h1>
                </section>
                <section className="py-5">
                    <div className="container">
                        <h3 className="text-info">Booking Form</h3>
                        <div className="row">
                        <div className="col-lg-4">
                            <form onSubmit={handleBooking}>
                                     <div class="form-group">
                                        
                                        <input type="text" class="form-control" ref={placeRef}  value={aparment.place} />     
                                    </div>
                                    <div class="form-group">
                                        
                                        <input type="text" class="form-control" ref={costRef}  value={aparment.cost+"$"} />     
                                    </div>
                                    <div class="form-group">
                                        
                                        <input type="text" class="form-control" ref={emailRef}  value={user.email} />     
                                    </div>
                                    <div class="form-group">
                                        
                                        <input type="text" class="form-control"  ref={phoneRef} placeholder="Enter Phone" />     
                                    </div>
                                    <div class="form-group">
                                        <label>Address</label>
                                        <textarea className="form-control" ref={addressRef} cols="30" rows="5"></textarea>  
                                    </div>

                                    <button type="submit" className="btn btn-danger">Instant Booking</button>
                            </form>
                            </div>
                            
                            <div className="col-lg-2">
                                
                            </div>
                            <div className="col-lg-6">
                                <img className="img-fluid rounded" src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-girl-reading-a-book-in-the-room-indoor-furniture-bedroom-png-image_368719.jpg" />
                                </div>

                           
                        </div>
                    </div>
                </section>
            <Footer></Footer>
            
        </>
    );
};

export default BookingPage;