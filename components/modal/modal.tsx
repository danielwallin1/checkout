import { useDispatch } from "react-redux";
import { _Modal } from "../../interfaces/interfaces";
import { setModalState } from "../../store/donationSlice";
import styles from "./modal.module.css";

const Modal = ({ children, isVisible }:_Modal) => {
  const dispatch = useDispatch();

  return (
    isVisible ?
      <div>
        <div
          className={styles.overlay}
          onClick={() => {
          dispatch(setModalState(false));
        }}>
        </div>
        <div className={styles.content}>
          <div
            className={styles["close-button"]}
            onClick={() => {
              dispatch(setModalState(false));
            }}>
          </div>
          {children}
        </div>
      </div>
    : null
  )
};

export default Modal;