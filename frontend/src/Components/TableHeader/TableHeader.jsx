import Dropdown from "../Dropdown/Dropdown";
import {useDispatch} from "react-redux";
import {changeLength} from "../../Store/TableSlice"

function TableHeader({ setData, dataEmployee }) {

  const dispatch = useDispatch()


  //Methode de filtrage des employés affichés dans le tableau
  const search = (searchTerm) => {
    const dataFiltered = dataEmployee.filter((val) => {

      if (searchTerm === "") {
        return val;

      } 
      else if (
        val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.lastName.toLowerCase().includes(searchTerm.toLowerCase())  ||
        val.birthDay.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.startDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.zip.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.department.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }

    });
    setData(dataFiltered);

  };

  return (

    <div className="table-header">

      <Dropdown name={"Show"}  onChange={(e) => dispatch(changeLength(parseInt(e.target.value, 10)))} 
        datas={[{ name: 10, value: 10 },{ name: 25, value: 25 },{ name: 50, value: 50 },{ name: 100, value: 100 }]}>   
      </Dropdown>
      
      <input
        type="text"
        placeholder="Search..."
        className="form-control"
        onChange={(e) => {
          search(e.target.value); 
        }}
      ></input>
      
    </div>
  );
}

export default TableHeader;
