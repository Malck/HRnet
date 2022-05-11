function TableHeader({ setData, dataEmployee }) {
  
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

      /*else if (dataFiltered.length === 0){
        return "Aucun match found"

      }*/

    });
    setData(dataFiltered);
  };

  return (
    <div className="table-header">
      <div className="entries">show entries</div>

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
