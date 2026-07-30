import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register(){
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:""

    });

    const [message,setMessage] = useState("");
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit=async(e)=>{

        e.preventDefault();


        try{

            await registerUser(formData);


            setMessage(
                "Registration successful"
            );


            setTimeout(()=>{

                navigate("/");

            },1000);


        }
        catch(error){

            setMessage(

                error.response?.data?.message ||
                "Registration failed"

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
            Create Account
        </h1>
        <p>
            Start managing your mechanic bookings
        </p>

        <div className="form-group">
            <label>
                Name
            </label>

            <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            />
        </div>
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
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            />
        </div>
        <button 
        className="auth-btn"
        type="submit"
        >
            Register
        </button>
        {
            message &&
            <p 
            className={
                message.includes("successful")
                ? "success-message"
                : "error-message"
            }
            >
                {message}

            </p>
        }
        <p className="auth-link">
            Already have an account?
            <span>
                Login
            </span>
        </p>
    </form>

</div>
);
}
export default Register;