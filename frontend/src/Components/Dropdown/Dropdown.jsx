import "../Dropdown/dropdown.css";

function Dropdown({ name, datas, onChange }) {
  return (
    <div className="input dropdown">

      <label className="label_dropdown" htmlFor={name}>
        {name}
      </label>

      <select className="input_dropdown" name={name} id={name} onChange={onChange}>

        {datas.map((data) => (
          <option key={data.name} value={data.value}>
            {data.name}
          </option>
        ))}

      </select>

    </div>
  );
}

export default Dropdown;
