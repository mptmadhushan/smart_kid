import React from "react";
import com from "../Assets/Images/combg.jpg";
import book from "../Assets/Images/book.png";
import { Link } from "react-router-dom";


function NoteBook() {
  return (
    <div className="main-body-wrapper w-full bg-cover bg-no-repeat bg-center justify-center items-center">
        <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center opacity-75 -z-10"
            style={{ backgroundImage: `url(${com})` }}
        ></div>

      <div className="main-body-content w-full h-full text-center z-10 justify-center items-center">
            <div className="home-menu flex flex-col mx-auto w-[40%] h-full p-10 justify-center items-center">
                    

                    <div className="w-full h-full mx-auto justify-center items-center relative ">
                        <div className="btn-notebook">
                        <h1 className="justify-center text-center absolute left-1/2 top-1/2 -translate-x-1/2 text-[28pt] font-link z-10 cursor-pointer">My NoteBook</h1>
                        <Link to="/ScanEssay"><img src={book} alt="" srcset="" className="w-full h-full object-cover notebook cursor-pointer"/></Link>
                        </div>
                       

                    </div>
            </div>
      </div>

    </div>
  );
}

export default NoteBook;
