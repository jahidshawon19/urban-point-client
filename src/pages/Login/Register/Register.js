import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth'

const Register = () => {

    const [loginData, setLoginData] = useState({})
    const {user, registerUser, isLoading, authError} = useAuth()
    const history = useHistory()
    
    const handleOnChange = e =>{
        const field = e.target.name  
        const value = e.target.value 

        const newLoginData = {...loginData}
        newLoginData[field] = value 
        setLoginData(newLoginData)
        
    }


    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
                alert('Password Did not match')
                return
        }
        registerUser(loginData.email, loginData.password, history)

        
        e.preventDefault()
        e.target.reset();
    }

    return (
        <section className="py-5">
            <div className="container">
                <h2 className="font-weight-bold text-center text-success">Registration</h2>
                <div className="row mt-5">
                    <div className="col-lg-6">
                         

                    {
                        !isLoading &&                         
                        <form onSubmit={handleLoginSubmit}>

                        <div className="form-group">
                            
                            <input type="email" name="email" onChange={handleOnChange} className="form-control" placeholder="Enter email" />
                            
                        </div>
                        <div className="form-group">
                           
                            <input type="password" name="password" onChange={handleOnChange} className="form-control"  placeholder="Password" />
                        </div>
                        <div className="form-group">
                           
                            <input type="password" name="password2" onChange={handleOnChange} className="form-control"  placeholder="Retype-Password" />
                        </div>
                       
                        <button type="submit" className="btn btn-danger">Register</button>
                        <Link to="/login">Already Registered? Please Login</Link>
                        </form>
                    }

                    {
                        isLoading && <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    }
                    {
                        user?.email && <div class="alert alert-success" role="alert">
                        Registration Successfully Complted!
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

export default Register;