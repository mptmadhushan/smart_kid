import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import camerabg from "../Assets/Images/camerabg.jpg";
import book from "../Assets/Images/book.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  const data = location.state;
  console.log("🚀 ~ file: Result.jsx:11 ~ Result ~ data:", data);

  return (
    <div className="main-body-wrapper w-full bg-cover bg-no-repeat bg-center ">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center opacity-75 -z-10"
        style={{ backgroundImage: `url(${camerabg})` }}
      ></div>

      <div className="main-body-content w-full h-full text-center z-10 ">
        <div className="home-menu flex flex-col mx-auto w-[50%] h-full p-10 ">
          <div className="w-full h-full mx-auto  bg-sky-400  relative ">
            <div className="cam-box  w-full h-[600px] p-5 mx-auto absolute translate-y-1/3 justify-center items-center text-center">
              <h1 className="justify-center text-center text-[18pt] font-link">
                Result
              </h1>

              <textarea
                name=""
                id=""
                cols="30"
                rows="15"
                placeholder="Result will appear here"
                className="p-5 mt-5 text-left resize-none w-full bg-transparent"
              />
              <Link to="/ScanEssay" className="">
                <button className="mt-5 bg-sky-500 py-2 px-5 text-white font-semibold rounded-md bottom-0">
                  {" "}
                  Re-Capture
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
