import "../Table/table.css"
import { useSelector } from "react-redux";
import { useState } from "react"
import TableHeader from "../TableHeader/TableHeader"
import TableFooter from "../TableFooter/TableFooter"

export default function Table() {

  const dataEmployee = useSelector((state) => state.UserState);     {/* j'essais de recup mon state mais c'est un tableau et ça ne fonctionne pas */}
  console.log(dataEmployee); 

  const [contacts , setContacts] = useState(dataEmployee)
  
    return (
  
      <div className="employee_table">

        <TableHeader/>

        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Start</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
            <tr>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.startDate}</td>
              <td>{contact.department}</td>
              <td>{contact.birthDay}</td>
              <td>{contact.street}</td>
              <td>{contact.city}</td>
              <td>{contact.state}</td>
              <td>{contact.zip}</td>
            </tr>
            ))}
            
          </tbody>
        </table>

        <TableFooter/>
  
      </div>
  
      )
  }