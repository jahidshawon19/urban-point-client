import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const BookingList = () => {

    const [booking, setBooking] = useState([])
    useEffect(() =>{
        fetch('https://enigmatic-hollows-67176.herokuapp.com/booking')
        .then(res => res.json())
        .then(data => setBooking(data))        
    }, [])


    const handleLatestApartment = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if(proceed){
            const url = `https://enigmatic-hollows-67176.herokuapp.com/booking/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remainingBookings = booking.filter(la => la._id !== id)
                    setBooking(remainingBookings)
                }
            })
        }       

    }

    return (
        <>
            <AdminNavbar></AdminNavbar>
            <section className="py-5">
            <div className="container">
                <h2>Booking List</h2>
                <p className="text-danger">Total: {booking.length}</p>
                <div className="row">
                   <div className="col-lg-12">
                   <table className="table table-striped">
                    <thead className= "thead-dark">
                        <tr>

                        <th scope="col">Place Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                       
                        <th>Action</th>
                        
                        </tr>
                    </thead>
                    <tbody>

                    
                                {
                                    booking.map( (b)=> (
                                        <tr>
                                        
                                        <td>{b.place}</td>
                                        <td>{b.cost}</td>
                                        <td>{b.email}</td>
                                        <td>{b.phone}</td>
                                        <td>{b.address}</td>
                                        
                                        
        
                                        <td><button  onClick={()=> handleLatestApartment(b._id)} className="btn btn-warning btn-sm"> Cancel Booking</button></td>
                                        </tr>
                                    ))
                                }
                      


                    
                     
                    </tbody>
                    </table>
                   </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default BookingList;