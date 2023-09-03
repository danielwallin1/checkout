import { useDispatch, useSelector } from "react-redux";
import { _Accordion } from "../../interfaces/interfaces";
import styles from "./accordion.module.css";

const Accordion = ({ children, label, name, isActive, isCompleted, action }:_Accordion ) => {
  const dispatch = useDispatch();
  const active:any = useSelector(isActive);
  const completed:any = useSelector(isCompleted);
  const accordionClass = completed[name] ? "accordion--active" : "accordion";

  console.log(active[name], name, active)

  return (
    <div className={styles.wrapper}>
      <button
          className={styles[accordionClass]}
          >
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