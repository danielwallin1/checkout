import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalState, setActiveState, setCompletedState, selectActiveState, selectCompletedState } from "../../store/donationSlice";
import styles from "./modal.module.css";

interface Deceased {
  deceased: {
    name: string,
    message: string,
  },
  icon:string,
  isVisible:boolean
}

const Modal = ({ deceased, icon, isVisible }:Deceased) => {
  const dispatch = useDispatch();
  const active = useSelector(selectActiveState);
  const completed = useSelector(selectCompletedState);
  const image = require(`../../static/images/${icon}.webp`).default.src;

  useEffect(() => {
  }, [deceased, isVisible]);

  return (
    isVisible ?
    <div>
      <div
        className={styles.overlay}
        onClick={event => {
        dispatch(setModalState(false));
      }}>
      </div>
      <div className={styles.wrapper}>
        <div className={styles["card"]}>
          <div className={styles["card-inner"]}>
            <div>
              <div  className={styles["content"]}>
                <img className={styles.icon} src={image} />
                <p className={styles["card-info"]}>Till minne av</p>
                <p className={styles["card-name"]}>{deceased.name}</p>
                <p className={styles["card-info"]}>har Hjärnfonden tacksamt mottagit en gåva till forskning om hjärnan</p>
                <p className={styles["card-message"]}>{deceased.message}</p>
              </div>
            </div>
            <div className={styles.logo}></div>
          </div>
          <div className={styles["agreement-wrapper"]}>
            <p>Ser allt rätt ut?</p>
            <p>Godkänn minnesblad för att fortsätta.</p>
            <button onClick={event => {
              dispatch(setActiveState({ ...active, info: false, amount: true }))
              dispatch(setCompletedState({ info: true, amount: false, contacted: false, payment: false }))
              dispatch(setModalState(false));
            }}
            className={styles["agreement-btn"]}>Godkänn minnesblad</button>
            <p
              className={styles.edit}
              onClick={event => {
                dispatch(setModalState(false));
              }}>Ändra minnesbladet</p>
          </div>
        </div>
      </div>
    </div>
    : null
  )
};

export default Modal;