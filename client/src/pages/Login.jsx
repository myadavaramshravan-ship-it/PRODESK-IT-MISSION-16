import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";


function Login(){

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);


    const [formData,setFormData] = useState({

        email:"",
        password:""

    });
    const [message,setMessage] = useState("");
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const data = await loginUser(formData);
            login(data);
            navigate("/dashboard");
        }
        catch(error){
            setMessage(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

return (
<div className="auth-page">
    <form 
    className="auth-card"
    onSubmit={handleSubmit}
    >

        <h1>
            Welcome Back
        </h1>

        <p>
            Login to manage your bookings
        </p>
        <div className="form-group">
            <label>
                Email
            </label>
            <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            />
        </div>

        <div className="form-group">
            <label>
                Password
            </label>
            <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            />
        </div>

        <button 
        className="auth-btn"
        type="submit"
        >
            Login
        </button>
        {
            message &&
            <p className="error-message">
                {message}
            </p>
        }
        <p className="auth-link">
         Don't have an account?
        <span onClick={() => navigate("/register")}> Register</span>

         </p>


    </form>


</div>
);
}
export default Login;