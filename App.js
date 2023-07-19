import Counter from "./components/Counter";
import Shopping from "./components/Shopping";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";

function App() {

  const[sampleData, setSampleData] = useState(52);
  return (
     <div className="main-wrapper">


    <Routes>
      <Route path="/counter" element={<Counter></Counter>}></Route>
      <Route path="/shopping" element={<Shopping></Shopping>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
      
      
     </div>
  ); 
}

export default App;
