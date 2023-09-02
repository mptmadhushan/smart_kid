import React from "react";
import { Link } from "react-router-dom";


function Nav()
{
    return(
        <div className="nav-wrapper w-full h-[80px] ">
                <div className="nav-body p-5 w-[95%] h-full justify-start items-center flex flex-row mx-auto font-link">
                        <Link to="/"><h1>Smart Kid</h1></Link>
                        
                </div>
        </div>
    );
}

export default Nav;