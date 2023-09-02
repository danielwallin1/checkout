import { setAmountState, selectAmountState } from "../../store/donationSlice";
import { setActiveState, selectActiveState, selectCompletedState, selectDirtyState } from "../../store/stepSlice";
import { useDispatch, useSelector } from "react-redux";
import data from "../../data/data.json";
import styles from "./amount.module.css";

const Amount = () => {
  const dispatch = useDispatch();
  const isActive = useSelector(selectActiveState);
  const isCompleted = useSelector(selectCompletedState);
  const accordionClass = isCompleted.amount ? "accordion--active" : "accordion";
  const selected = useSelector(selectAmountState);

  function renderAmounts() {
    return (
      <div>
        <div className={styles["amount-wrapper"]}>
          {data.amounts.map(amount => {
            const buttonClass = amount.label == selected
              ? "amount-label-active" : "amount-label";
            
              return (
              <div
              key={amount.label}
              onClick={event => {
                dispatch(setAmountState(event.target.innerHTML))
              }}
              className={styles[buttonClass]}>
              <span className={styles.amount}>{amount.label}</span>
            </div>
            )
          })}
        </div>
      </div>
    )
  }

  function renderSections() {
    return(
      <div>
        {renderAmounts()}
        <button
          className={styles["step-button"]}
          onClick={event => {
            event.preventDefault();
            dispatch(setActiveState("contact"))
          }}>
          Till kontaktuppgifter
        </button>
        </div>
    )
  }

  function renderInfo() {
    return (
       <div className={styles["amount-info"]}>
        <p className={styles["amount-text"]}><span className={styles["amount-prefix"]}>Belopp:</span>{selected}</p>
        <p className={styles["amount-text"]}><span className={styles["amount-prefix"]}>Ändamål:</span>Där det bäst behövs</p>
      </div>
    )
  }

  return (
    <div>
      <button
          className={styles[accordionClass]}
          >
          <h3 className={styles["step-header"]}>
            2. Gåvobelopp
          </h3>
          {!isActive.amount &&
            isCompleted.amount &&
            <p onClick={() => { dispatch(setActiveState("amount"))}}
            className={styles["edit-button"]}>Ändra</p>
          }
      </button>
      {isActive.amount && renderSections()}
      {isCompleted.amount && renderInfo()}
    </div>
  )

};

export default Amount;