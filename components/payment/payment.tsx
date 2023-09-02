import { selectActiveState } from "../../store/stepSlice";
import { useSelector } from "react-redux";
import styles from "./payment.module.css";

const Payment = ({}) => {
  const isActive = useSelector(selectActiveState);

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
          className={styles.accordion}
          >
          <h3 className={styles["step-header"]}>
            4. Betalsätt
          </h3>
      </button>
      {isActive.payment && renderPayment()}
    </div>
  )
};

export default Payment;