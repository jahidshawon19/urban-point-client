import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser} from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth';
import './Navbar.css'
const Navbar = () => {
    const {user, logOut} = useAuth()
    return (
        <div>
          <header>
              <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand font-weight-bold text-light" to="/">Urban Point</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-lg-auto">

                        <li className="nav-item active">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        


                    {
                        user?.email?
                        
                        <>
                         <li className="nav-item active">
                        <Link className="nav-link" to="/dashboard">My Dashboard</Link>
                         </li>
                        <li className="nav-item active">
                        <Link className="nav-link" to="/"><FontAwesomeIcon icon={faUser} /> {user.email}</Link>
                         </li>
                         <li className="nav-item active">
                            <button onClick={logOut} className="btn btn-danger btn-sm"> <FontAwesomeIcon icon={faLock} />Logout</button>
                            </li>
                        </>
                        :
                        <>
                            <li className="nav-item active">
                            <Link className="nav-link" to="/login"> <FontAwesomeIcon className="text-secondary" icon={faLock} /> Login</Link>
                            </li>

                            <li className="nav-item active">
                            <Link className="nav-link" to="/login"> <FontAwesomeIcon className="text-secondary" icon={faUser} /> Create Account</Link>
                            </li>
                        </>
                    }



                     

                     

                      
                
                       
                    
                    
                        </ul>
                    
                    </div>
            </nav>
              </div>
          </header>
        </div>
    );
};

export default Navbar;