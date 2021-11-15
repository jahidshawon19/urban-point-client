import React, {useState} from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth'
const Login = () => {

    const [loginData, setLoginData] = useState({})
    const {user, logInUser, authError} = useAuth()

    const location = useLocation()
    const history = useHistory()


    const handleOnChange = e =>{
        const field = e.target.name  
        const value = e.target.value 

        const newLoginData = {...loginData}
        newLoginData[field] = value 
        setLoginData(newLoginData)
        
    }


    const handleLoginSubmit = e =>{
        logInUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }


    return (
        <section className="py-5">
            <div className="container">
                <h2 className="font-weight-bold text-center text-danger">Login</h2>
                <div className="row mt-5">
                    <div className="col-lg-6">

                    <form onSubmit={handleLoginSubmit}>

                    <div className="form-group">
                        
                        <input type="email" name="email" onChange={handleOnChange} className="form-control" placeholder="Enter email" />
                        
                    </div>
                    <div className="form-group">
                       
                        <input type="password" name="password" onChange={handleOnChange} className="form-control"  placeholder="Password" />
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link to="/register">Are You New?Please Register</Link>
                    </form>

                    {
                        user?.email && <div class="alert alert-success" role="alert">
                        Login Successfully Complted!
                            </div>
                    }

                    {
                        authError && <div class="alert alert-danger" role="alert">
                        {authError}
                            </div>
                    }
                    </div>

                    <div className="col-lg-6">
                        <img src="https://i.ytimg.com/vi/0TBsMgwQaE8/maxresdefault.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;