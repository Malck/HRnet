import "../Table/table.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableFooter from "../TableFooter/TableFooter";

export default function Table() {
  const dataEmployee = useSelector((state) => state.UserState);
  const indexStart = useSelector((state) => state.TableState.indexStart);
  const indexEnd = useSelector((state) => state.TableState.indexEnd);

  const [data, setData] = useState(dataEmployee);

  //methode de state pour rajouter une fleche de direction haut : bas selon l'etat du tableau ( croissant decroissant )
  const [dataSorted, setDataSorted] = useState(false);

  //methode de sorting
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DESC");
      setDataSorted(true);
    }
    if (order === "DESC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
      setDataSorted(false);
    }
  };

  //methode de

  return (
    <div className="employee_table">
      <TableHeader setData={setData} dataEmployee={dataEmployee} />

      <table>
        <thead>
          <tr>
            <th onClick={() => sorting("firstName")}>
              <span> {dataSorted === true ? "▲" : "▼"}</span> FirstName
            </th>
            <th onClick={() => sorting("lastName")}>
              LastName 
            </th>
            <th onClick={() => sorting("startDate")}>
              Start <span> {dataSorted === true ? "▲" : "▼"} </span>{" "}
            </th>
            <th onClick={() => sorting("department")}>Department</th>
            <th onClick={() => sorting("birthDay")}>Date of Birth</th>
            <th onClick={() => sorting("street")}>Street</th>
            <th onClick={() => sorting("city")}>City</th>
            <th onClick={() => sorting("state")}>State</th>
            <th onClick={() => sorting("zip")}>Zip Code</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td className="center" colSpan="9">
                No data available in table
              </td>
            </tr>
          ) : (
            data.slice(indexStart, indexEnd).map((contact) => (
              <tr key={contact.id}>
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
            ))
          )}
        </tbody>
      </table>

      <TableFooter />
    </div>
  );
}

/* 


*/
