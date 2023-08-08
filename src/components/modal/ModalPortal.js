import ReactDom from "react-dom";

function ModalPortal({ children }) {
  const el = document.getElementById("modal-root");

  return ReactDom.createPortal(children, el);
}

export default ModalPortal;
