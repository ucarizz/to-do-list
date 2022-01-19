import "./modal.scss";

const Modal = ({ onConfirm, onCancel }) => {
  return (
    <div className={`modal`}>
      <div className="modal-content">
        <span className="close" onClick={() => onCancel()}>
          &times;
        </span>
        <p>Eminmisiniz ?</p>
        <div className="button-group">
          <button onClick={() => onCancel()}>Cancel</button>
          <button onClick={() => onConfirm()}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
