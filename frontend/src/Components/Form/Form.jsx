import "../Form/form.css";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
//import states from "../../Assets/states.json";
//import departments from "../../Assets/departments.json";
import { addEmployee } from "../../Store/Slice";

export default function Form() {

  const inputFirst = useRef(null);
  const inputLast = useRef(null);
  const inputBirth = useRef(null);
  const inputStart = useRef(null);

  /*
    const [street, setStreet] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [zip, setZip] = useState();
    const [department, setDepartment] = useState();
    */

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const employeeData = {
      firstName: inputFirst.current.value,
      lastName: inputLast.current.value,
      birthDay: inputBirth.current.value,
      startDate: inputStart.current.value,
    };

    console.log("Apres le submit employeeData = ", employeeData);
    dispatch(addEmployee(employeeData));
    e.target.reset();
    //onOpenModal();
  };

  return (

    <div className="formulaire">

      <form action="" onSubmit={(e) => handleSubmit(e)}>

        <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          {/*<input onChange={(e) => setFirstName(e.target.value)}  type="text"  id="firstName" /> */}
          <input ref={inputFirst} type="text" id="firstName" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          {/*<input onChange={(e) => setLastName(e.target.value)}  type="text" name="lastName" id="lastName" /> */}
          <input ref={inputLast} type="text" id="lastName" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="birth">Date of birth</label>
          {/*<input onChange={(e) => setBirthDay(e.target.value)}  type="date" id="birth" />*/}
          <input ref={inputBirth} type="date" id="birth" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="start">Start Date</label>
          {/*<input onChange={(e) => setStartDate(e.target.value)}  type="date" id="start" />*/}
          <input ref={inputStart} type="date" id="start" required />
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <label htmlFor="state">State</label>
          <select name="state" id="state"></select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>

        <button type="submit">Save</button>

      </form>
      
    </div>
  );
}

//MEMO

//dans les input :
//value="{lastName}" value="{birthDay}" value="{startDate}"

//Pour les states et les departments utiliser un dropdown a configuerer ailleurs

//<Dropdown name={"State"} datas={states} onChange={(e) => setState(e.target.value)} />

//Supprimer :

//Les useStates ont été remplacé par des useRef

/*
const [firstName, setFirstName] = useState();
const [lastName, setLastName] = useState();
const [birthDay, setBirthDay] = useState();
const [startDate, setStartDate] = useState();

*/
