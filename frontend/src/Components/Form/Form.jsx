import "../Form/form.css";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
//import Modal from "../Modal/Modal";
import { Modal } from "malck-modal-npm";

import states from "../../Assets/states.json";
import departments from "../../Assets/departments.json";
import { addEmployee } from "../../Store/Slice";

export default function Form() {
  //Les differents input saisis
  const inputFirst = useRef(null);
  const inputLast = useRef(null);
  const inputBirth = useRef(null);
  const inputStart = useRef(null);
  const inputStreet = useRef(null);
  const inputCity = useRef(null);
  const inputZip = useRef(null);

  //Pour les deux list dropdown
  //cette ecriture permet de recuperer le premier element du tableau (le premier states de la liste qui sera sous forme de dropdown)
  const [firstState] = states;
  const [firstDepartment] = departments;

  const [state, setState] = useState(firstState.value);
  const [department, setDepartment] = useState(firstDepartment.value);

  //le statut de la modal qui apparait
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const employeeData = {
      firstName: inputFirst.current.value,
      lastName: inputLast.current.value,
      birthDay: inputBirth.current.value,
      startDate: inputStart.current.value,
      street: inputStreet.current.value,
      city: inputCity.current.value,
      zip: inputZip.current.value,
      state: state,
      department: department,
      id: Date.now(),
    };
    
    console.log("Apres le submit employeeData = ", employeeData);
    dispatch(addEmployee(employeeData));
    e.target.reset();
    onOpenModal();
  };

  return (
    <div className="formulaire">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input ref={inputFirst} type="text" id="firstName" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input ref={inputLast} type="text" id="lastName" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="birth">Date of Birth</label>
          <input ref={inputBirth} type="date" id="birth" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="start">Start Date</label>
          <input ref={inputStart} type="date" id="start" required />
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input ref={inputStreet} type="text" id="street" required />

          <label htmlFor="city">City</label>
          <input ref={inputCity} type="text" id="city" required />

          <Dropdown
            name={"State"}
            datas={states}
            onChange={(e) => setState(e.target.value)}
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input ref={inputZip} type="number" id="zip-code" required />
        </fieldset>

        <Dropdown
          name={"Department"}
          datas={departments}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <br></br>

        <button type="submit">Save</button>

        {openModal && (
          <Modal message={"Employee created"} onCloseModal={onCloseModal} />
        )}
      </form>
    </div>
  );
}

