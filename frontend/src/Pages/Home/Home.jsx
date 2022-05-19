import "../Home/home.css";
import { Link } from "react-router-dom";
import Form from "../../Components/Form/Form";

export default function Home() {

  return (

    <div className="home-container">

      <div className="title">
        <h1>HRnet</h1>
      </div>

      <div className="container">
        <Link to="/employee" className="back-home-employee">
          {" "}
          <button type="button">View Current Employees</button>{" "}
        </Link>

        <h2>Create Employee</h2>

        <Form />
      </div>
      
    </div>
    
  );
}

