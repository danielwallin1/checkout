import { useDispatch, useSelector } from "react-redux";
import { _Accordion, _Keyable } from "../../interfaces/interfaces";
import styles from "./accordion.module.css";

const Accordion = ({ children, label, name, isActive, isCompleted, action }:_Accordion ) => {
  const dispatch = useDispatch();
  const active:_Keyable = useSelector(isActive);
  const completed:_Keyable = useSelector(isCompleted);
  const accordionClass:string = completed[name] ? "accordion--active" : "accordion";

  return (
    <div className={styles.wrapper}>
      <button className={styles[accordionClass]}>
          <h3 className={styles["step-header"]}>
            {label}
          </h3>
          {!active[name] && completed[name] &&
            <p onClick={() => {
              dispatch(action(name))
            }} className={styles["edit-button"]}>Ändra</p>
          }
      </button>
      {children}
    </div>
  )
};

export default Accordion;