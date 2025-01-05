import { ComplexNavbar } from "./components/Navbar";
import { Footer } from "./components/Footer"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
// import Contact from "./pages/Contact";
// import Blogs from "./pages/Blogs";
// import SignUp from "./pages/Signup";

export default function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <div className="relative grid min-h-[100vh] w-screen px-8">
          <ComplexNavbar />
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Resources" element={<></>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/sign-up" element={<></>} />
            <Route path="*" element={<NotFound />} /> {/* Catch-All Route */}
          </Routes>
        </div> 
        <Footer/>
      </div>
    </Router>
  );
}