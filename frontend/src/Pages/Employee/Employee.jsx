import "../Employee/employee.css";
import { Link } from "react-router-dom";

import Table from "../../Components/Table/Table"
//import { useSelector } from "react-redux";

export default function Employee() {

  
  //const dataEmployee = useSelector((state) => state.UserState);     {/* j'essais de recup mon state mais c'est un tableau et ça ne fonctionne pas */}
  //console.log(dataEmployee);                       {/*undefined */}

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