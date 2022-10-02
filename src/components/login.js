import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import user from '../apiList/user';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

    const [request,setRequest] = useState({email:"",password:""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(user.login,request).then((data)=>{
            toast.success(data.data.message)
        }).catch((err)=>{
            toast.error(err.response.data.message)
        })
    }

    return (
        <div className="container col-md-4">
        <ToastContainer	/>
        <form onSubmit={handleSubmit}>
            <h2>Login here</h2>
            <p className="lead">Get Access to your account by entering to your credentials below</p>
            <div className="form-group">
                <div className="input-group">
                    <input type="email" className="form-control" 
                        onChange={(e)=>{
                            setRequest({ ...request, email: e.target.value })
                        }} 
                        name="email" value={request.email} 
                        placeholder="Email Address" required="required"
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <input type="password" className="form-control"
                        onChange={(e)=>{
                            setRequest({ ...request, password: e.target.value })
                        }}
                        name="password" value={request.password}
                        placeholder="Password" required="required"
                    />
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block btn-lg">Sign In</button>
            </div>
            <p className="small text-center">By clicking the Sign Up button, you agree to our <br/><a href="#">Terms &amp; Conditions</a>, and <a href="#">Privacy Policy</a>.</p>
        </form>
        <div className="text-center">Don't have an account? <Link to="/register">Create account</Link>.</div> 
        </div>        
    )
}

export default Login