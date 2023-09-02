import React from "react";
import homebg from "../Assets/Images/home.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-body-wrapper w-full bg-cover bg-no-repeat bg-center ">
        <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center opacity-75 -z-10"
            style={{ backgroundImage: `url(${homebg})` }}
        ></div>

      <div className="main-body-content w-full  text-center z-10">
            <div className="home-menu flex flex-col mx-auto w-[40%] h-full p-10">
                    <h1 className="text-[48pt] font-link">I am</h1>

                    <div className="btn-panel flex flex-col space-y-5 mt-10">
                            <Link to="EssayTopic"><div className="grade p-5 w-full rounded-lg bg-sky-300 border-2 border-sky-700 text-[28pt] font-semibold cursor-pointer shadow-md shadow-slate-400" >
                                    Grade 3 
                            </div></Link>

                            <Link to=""><div className="grade p-5 w-full rounded-lg bg-sky-300 border-2 border-sky-700 text-[28pt] font-semibold cursor-pointer shadow-md shadow-slate-400" >
                                    Grade 4 
                            </div></Link>

                            <Link to=""><div className="grade p-5 w-full rounded-lg bg-sky-300 border-2 border-sky-700 text-[28pt] font-semibold cursor-pointer shadow-md shadow-slate-400" >
                                    Grade 5 
                            </div></Link>

                    </div>
            </div>
      </div>

    </div>
  );
}

export default Home;
