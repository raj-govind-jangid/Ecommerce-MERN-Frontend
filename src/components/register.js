import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import user from '../apiList/user';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {

    const [request,setRequest] = useState({fullname: "", email:"", password:"",confirmPassword:""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(request.password == request.confirmPassword){
            await axios.post(user.register,request).then((data)=>{
                setRequest({fullname: "", email:"", password:"", confirmPassword:""})
                toast.success(data.data.message)
            }).catch((err)=>{
                toast.error(err.response.data.message)
            })
        }else{
            toast.error("Password don't match")
        }
        
    }

    return (
        <div className="container col-md-4">
        <ToastContainer	/>
        <form onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <p className="lead">It's free and hardly takes more than 30 seconds.</p>
            <div className="form-group">
                <div className="input-group">
                    <input type="text" className="form-control"
                        onChange={(e)=>{
                            setRequest({...request, fullname: e.target.value})
                        }} 
                        name="fullname" value={request.fullname}
                        placeholder="Fullname" required="required"
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <input type="email" className="form-control"
                        onChange={(e)=>{
                            setRequest({...request, email: e.target.value})
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
                            setRequest({...request, password: e.target.value})
                        }} 
                        name="password" value={request.password} 
                        placeholder="Password" required="required"
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <input type="password" className="form-control"
                        onChange={(e)=>{
                            setRequest({...request, confirmPassword: e.target.value})
                        }} 
                        name="confirmPassword" value={request.confirmPassword} 
                        placeholder="Confirm Password" required="required"
                    />
                </div>
            </div>        
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block btn-lg">Sign Up</button>
            </div>
            <p className="small text-center">By clicking the Sign Up button, you agree to our <br/><a href="#">Terms &amp; Conditions</a>, and <a href="#">Privacy Policy</a>.</p>
        </form>
        <div className="text-center">Already have an account? <Link to="/login">Login here</Link>.</div>
        </div>        
    )
}

export default Register