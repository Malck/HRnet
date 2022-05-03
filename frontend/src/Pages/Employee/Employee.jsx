import "../Employee/employee.css";
import { Link } from "react-router-dom";
//import {useSelector} from "../"

export default function Employee() {

  
  //const dataEmployee = useSelector((state) => state.Userstate);

  return (

    <div className="employee">

      <h1 className="sr-only">Current Employees</h1>

      <div>
        employees.map
      </div>

      <Link to="/" className="back-home">

        <h3 className="sr-only">Back Home</h3>
      </Link>

    </div>

    )
}