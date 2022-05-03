import "../Header/header.css";
import HeaderHR  from "../../Assets/logoHRNet.jpeg";
import { Link } from "react-router-dom";

export default function Header() {

  return (

    <nav className="main-nav">

      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={HeaderHR}
          alt="HRnet logo"/>
      </Link>
      
      <div className="header-links">

      <Link to="/employee" className="back-employee">Employees</Link>
      <Link to="/" className="back-home">Home</Link>
      </div>

    </nav>
    

  )
}