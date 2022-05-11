import "../Employee/employee.css";
import { Link } from "react-router-dom";
import Table from "../../Components/Table/Table"

export default function Employee() {

  return (

    <div className="employee-container">

      <h1 className="sr-only">Current Employees</h1>

      <Table/>

      <Link to="/" className="back-home">
        <h3 className="sr-only">Back Home</h3>
      </Link>

    </div>

    )
}