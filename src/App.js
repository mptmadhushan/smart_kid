import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Nav from "./Routes/Nav";
import EssayTopic from "./Routes/Essaytopic";
import NoteBook from "./Routes/NoteBook";
import ScanEssay from "./Routes/ScanEssay";
import Result from "./Routes/Result";

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Nav/>
      <Routes>
       
        <Route path="/" element={<Home />}/>
        <Route path="EssayTopic" element={<EssayTopic />}/>
        <Route path="NoteBook" element={<NoteBook />}/>
        <Route path="ScanEssay" element={<ScanEssay />}/>
        <Route path="Result" element={<Result />}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
