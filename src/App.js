import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componet/home";
import About from "./componet/about";
import Contact from "./componet/contact";
import Productdeatils from "./componet/Productdeatils";
function App() {
  return (
      <div className="App">
       <Routes>
       <Route index element={<Home />} />
        <Route path="/about" exact element={<About/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
        <Route path="/product/:id" exact element={<Productdeatils/>} />
      
      </Routes>
    </div>
  );
}

export default App;
