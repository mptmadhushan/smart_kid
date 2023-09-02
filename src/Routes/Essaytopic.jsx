import React from "react";
import homebg from "../Assets/Images/home.jpg";
import { Link } from "react-router-dom";

function EssayTopic() {
  return (
    <div className="main-body-wrapper w-full bg-cover bg-no-repeat bg-center ">
        <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center opacity-75 -z-10"
            style={{ backgroundImage: `url(${homebg})` }}
        ></div>

      <div className="main-body-content w-full  text-center z-10">
            <div className="home-menu flex flex-col mx-auto w-[40%] h-full p-10">
                    <h1 className="text-[48pt] font-link">I like to write about</h1>

                    <div className="btn-panel flex flex-col space-y-5 mt-10">
                    <ul >

                        
<Link to="/NoteBook"><li className="essay mb-3 w-full  text-[18pt] font-semibold cursor-pointer " >
      My toy 
</li></Link>

<Link to=""><li className="essay mb-3 w-full  text-[18pt] font-semibold cursor-pointer " >
       My Pet
</li></Link>

<Link to=""><li className="essay mb-3 w-full  text-[18pt] font-semibold cursor-pointer " >
       My best Friend
</li></Link>
</ul>

                    </div>
            </div>
      </div>

    </div>
  );
}

export default EssayTopic;
