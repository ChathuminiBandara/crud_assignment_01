import './App.css'
import {Footer, Navbar} from "./components/layout.tsx";
import Home from "./pages/home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./pages/contact.tsx";
import Notfound from "./pages/notfound.tsx";
import Crop from "./pages/crop.tsx";
import Staff from "./pages/staff.tsx";
import Field from "./pages/field.tsx";
import Vehicle from "./pages/vehicle.tsx";
import CropLogs from "./pages/cropLogs.tsx";
import EquipmentManager from "./pages/equipment.tsx";
import Profile from "./pages/profile.tsx";
import Logout from "./pages/logout.tsx";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/crop" element={<Crop/>} />
            <Route path="/staff" element={<Staff/>} />
            <Route path="/field" element={<Field/>} />
            <Route path="/vehicle" element={<Vehicle/>} />
            <Route path="/logs" element={<CropLogs/>} />
            <Route path="/equipment" element={<EquipmentManager/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/logout" element={<Logout/>}/>
            <Route path="*" element={<Notfound/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
