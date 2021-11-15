import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <Link className="navbar-brand" to="/admin">Urabn Point Admin</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Visit Site</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add_latest_apartment">Add Latest Apartment</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/latestApartmentList">Latest Apartments</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/add_apartment">Add Apartments</Link>
      </li>
     
     
    </ul>

  </div>
</nav>
        </div>
    );
};

export default AdminNavbar;