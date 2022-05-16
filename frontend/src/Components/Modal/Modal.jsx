import "./modal.css"

function Modal({ message, onCloseModal }) {
    return (
      <>
        <div className="modal"></div>
        <div className="modal_body">
          <p className="modal_message">{message}</p>
          <p className="modal_icon" onClick={onCloseModal}>
            &times; 🗙
          </p>
        </div>
      </>
    );
  }
  
  export default Modal;