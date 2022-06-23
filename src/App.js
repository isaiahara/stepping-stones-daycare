import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./HomePage";
import Infants from "./components/classrooms/Infants";
import { NavigationBar } from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Ones from "./components/classrooms/Ones";
import Twos from "./components/classrooms/Twos";
import Threes from "./components/classrooms/Threes";
import FourFive from "./components/classrooms/FourFive";
import SchoolKids from "./components/classrooms/SchoolKids";
import Footer from "./Footer";


function App() {
  return (
    <div>
      <header>
        
        <NavigationBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/Infants" element={<Infants />} />
        <Route path="/Ones" element={<Ones />} />
        <Route path="/Twos" element={<Twos />} />
        <Route path="/Threes" element={<Threes />} />
        <Route path="/FourFive" element={<FourFive />} />
        <Route path="/SchoolKids" element={<SchoolKids />} />
      </Routes>
        <Footer />
        <server />
    </div>
  );
}
export default App;
