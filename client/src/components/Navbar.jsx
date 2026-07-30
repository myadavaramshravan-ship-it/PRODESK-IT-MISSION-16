import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";


function Navbar(){

    const navigate = useNavigate();

    const { user, logout } = useContext(AuthContext);


    const handleLogout = ()=>{

        logout();

        navigate("/");

    };


    return (

        <nav className="navbar">


            <h2>
                AI Vehicle Assistant
            </h2>


            <div className="nav-right">


                <span>
                    {user?.name}
                </span>


                <button onClick={handleLogout}>
                    Logout
                </button>


            </div>


        </nav>

    );

}


export default Navbar;