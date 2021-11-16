import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'

const Dashboard = () => {
    const {user} = useAuth()
    const [booking, setBooking] = useState([])

    useEffect(()=> {
        const url = `https://enigmatic-hollows-67176.herokuapp.com/userBookingList?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))

    })
    return (
        <>
            <Navbar></Navbar>

           <section className="py-5 mt-5">
               <div className="container">
                   <h3 className="text-center font-weight-bold text-danger mt-5">My Total Booking: {booking.length} </h3>
                   <div className="row">
                       <div className="col-lg-4">
                         
                       <div className="card" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                       <h3>Profile</h3>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRormNx-cWkV0Ggs-j5Jnk6g6x7JSyVqRh7uA&usqp=CAU" className="card-img-top img-fluid" alt="..." style={{width:"100px", height:"100px"}} />
                        <div className="card-body">
                            <h5 className="card-title text-info">Email: {user.email}</h5>
                            
                           
                        </div>
                        </div>
                       </div>
                       <div className="col-lg-8">
                       <table className="table table-striped">
                    <thead className= "thead-dark">
                        <tr>

                        <th scope="col">Place Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                       
                      
                        
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
                                        
                                        
        
                                        </tr>
                                    ))
                                }
                      


                    
                     
                    </tbody>
                    </table>
                       </div>
                   </div>
               </div>
           </section>

           <Footer></Footer>
            

        </>
    );
};

export default Dashboard;