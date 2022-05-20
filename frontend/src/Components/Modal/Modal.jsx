import "./modal.css";

function Modal({ message, onCloseModal }) {
  return (
    <>

      <div className="modal" onClick={onCloseModal}>

        <div className="modal_body">
          <p className="modal_message">{message}</p>
          <p className="modal_icon" onClick={onCloseModal}>
            <i class="fa-solid fa-xmark"></i>
          </p>
        </div>
        
      </div>

    </>
  );
}

export default Modal;
