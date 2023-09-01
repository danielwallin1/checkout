import { setActiveState, selectActiveState, selectCompletedState, setCompletedState, selectDirtyState } from "../../store/donationSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./payment.module.css";

const Payment = ({}) => {
  const dispatch = useDispatch();
  const isActive = useSelector(selectActiveState);
  const isCompleted = useSelector(selectCompletedState);
  const isDirty = useSelector(selectDirtyState);
  const accordionClass = !isActive.payment && isDirty.payment ? "button--active" : "button";


  function renderPayment() {
    return (
      <div className={styles["textfield-wrapper"]}>
       <button className={styles["payment-btn"]}>Swish</button>
       <button className={styles["payment-btn"]}>Kreditkort</button>
       <button className={styles["payment-btn"]}>Inbetalningskort</button>
      </div>
    )
  }

  return (
    <div>
      <button
          className={styles[accordionClass]}
          >
          <h3 className={styles["step-header"]}>
            4. Betalsätt
          </h3>
          {!isActive.payment &&
            isDirty.payment &&
            <p onClick={() => {
              dispatch(
                setActiveState({
                  info: false,
                  amount: false,
                  contact: false,
                  payment: true
                })
              )
              dispatch(
                setCompletedState({
                  ...isCompleted,
                  payment: false
                })
              )
            }} className={styles["edit-btn"]}>Ändra</p>
          }
      </button>
      {isActive.payment && renderPayment()}
    </div>
  )
};

export default Payment;