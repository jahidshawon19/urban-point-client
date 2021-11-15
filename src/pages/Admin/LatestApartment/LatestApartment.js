import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const LatestApartment = () => {
    const [latestApartment, setLatestApartment] = useState([])
    useEffect(() =>{
        fetch('https://enigmatic-hollows-67176.herokuapp.com/latestApartment')
        .then(res => res.json())
        .then(data => setLatestApartment(data))
    }, [])
    // delete a latest apartment 

    const handleLatestApartment = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if(proceed){
            const url = `https://enigmatic-hollows-67176.herokuapp.com/latestApartment/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remainingLatestApartments = latestApartment.filter(la => la._id !== id)
                    setLatestApartment(remainingLatestApartments)
                }
            })
        }
    }
    return (
        <>
        <AdminNavbar></AdminNavbar>
        <section className="py-5">
            <div className="container">
                <h2>Latest Apartment List</h2>
                <p className="text-danger">Total: {latestApartment.length}</p>
                <div className="row">
                   <div className="col-lg-12">
                   <table className="table table-striped">
                    <thead className= "thead-dark">
                        <tr>

                        <th scope="col">Place Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Room Status</th>
                        <th scope="col">Type</th>
                        <th scope="col">Photo</th>
                       
                        <th>Action</th>
                        
                        </tr>
                    </thead>
                    <tbody>

                    
                                {
                                    latestApartment.map( (la)=> (
                                        <tr>
                                        
                                        <td>{la.place}</td>
                                        <td>{la.cost}</td>
                                        <td>{la.room}</td>
                                        <td>{la.apartmentType}</td>
                                        <td><img src={la.image} style={{height:"50px", width:"70px"}} /></td>
                                        
        
                                        <td><button onClick={()=> handleLatestApartment(la._id)} className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrash} /> </button></td>
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

export default LatestApartment;