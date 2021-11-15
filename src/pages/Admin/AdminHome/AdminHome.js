import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AdminHome = () => {
    return (
        <>
        
        <AdminNavbar></AdminNavbar>
        <section className="py-5">
            <div className="container">
                <div className="row">
                <div className="col-lg-4">
                    <div className="card bg-primary text-light">
                        <div className="card-body">
                            <Link to="/bookingList"><h4 className="text-light">Booking List</h4></Link>
                        </div>
                    </div>
                    </div>
                
                    <div className="col-lg-4">
                    <div className="card bg-danger text-light">
                        <div className="card-body">
                            <Link to="/latestApartmentList"><h4 className="text-light">Latest Apartment List</h4></Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="card bg-warning text-light">
                        <div className="card-body">
                            <Link to="/add_latest_apartment"><h4 className="text-light">Add Latest Apartment</h4></Link>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 mt-5">
                    <div className="card bg-success text-light">
                        <div className="card-body">
                            <Link to="/add_apartment"><h4 className="text-light">Add Apartment</h4></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
            
        </>
    );
};

export default AdminHome;