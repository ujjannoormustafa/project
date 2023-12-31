import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componet/home";
import About from "./componet/about";

function App() {
  return (
      <div className="App">
       <Routes>
       <Route index element={<Home />} />
      <Route path="/home" exact element={<Home/>}/>
      <Route path="/about" exact element={<About/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
