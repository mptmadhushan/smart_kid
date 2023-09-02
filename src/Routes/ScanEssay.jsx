import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import camerabg from "../Assets/Images/camerabg.jpg";
import book from "../Assets/Images/book.png";
import { useNavigate, useHistory, Link } from "react-router-dom";
import axios from "axios";
function ScanEssay() {
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  // const history = useHistory();
  const base64ToImage = (base64String, filename) => {
    const binaryString = atob(base64String);

    // Create a Uint8Array from the binary data
    const byteArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }

    // Create a Blob object
    const blob = new Blob([byteArray], { type: "image/jpeg" });

    // Create a FormData object and append the image file
    const formData = new FormData();
    formData.append("image", blob, filename);

    // Make an Axios POST request
    axios
      .post("your-api-url", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
        },
      })
      .then((response) => {
        // Handle the response from the server
        console.log("Response:", response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  };
  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(
      "🚀 ~ file: ScanEssay.jsx:13 ~ captureImage ~ imageSrc:",
      imageSrc
    );
    const dataPart = imageSrc.split(",")[1];
    base64ToImage(dataPart, "image.jpg");
    const adbc =
      "main-body-wrapper w-full bg-cove main-body-wrapper w-full bg-cove";
    // history.push({ pathname: "/Result", state: adbc });

    navigate(`/Result`, { state: { id: 1, name: "sabaoon" } });
  };

  return (
    <div className="main-body-wrapper w-full bg-cover bg-no-repeat bg-center ">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center opacity-75 -z-10"
        style={{ backgroundImage: `url(${camerabg})` }}
      ></div>

      <div className="main-body-content w-full h-full text-center z-10 ">
        <div className="home-menu flex flex-col mx-auto w-[60%] h-full p-10 ">
          <div className="w-full h-full mx-auto  bg-sky-400  relative ">
            <div className="cam-box  w-full h-[600px] p-5 mx-auto absolute translate-y-1/3 justify-center items-center text-center">
              <h1 className="justify-center text-center text-[18pt] font-link">
                Show your Essay to camera
              </h1>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="w-full h-[500px] "
              />
              <div className="w-full absolute bottom-[10%]">
                <button
                  onClick={captureImage}
                  className=" bg-blue-500 text-white p-2 rounded flex text-center mx-auto"
                >
                  Capture Image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScanEssay;
