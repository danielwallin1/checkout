import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { _Deceased } from "../../interfaces/interfaces";
import { setModalState } from "../../store/donationSlice";
import { setActiveState } from "../../store/stepSlice";
import styles from "./modal.module.css";

const Modal = ({ deceased, icon, isVisible }:_Deceased) => {
  const dispatch = useDispatch();
  const image = require(`../../static/images/${icon}.webp`).default.src;

  useEffect(() => {
  }, [deceased, isVisible]);

  return (
    isVisible ?
    <div>
      <div
        className={styles.overlay}
        onClick={() => {
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
              dispatch(setActiveState("amount"))
              dispatch(setModalState(false));
            }}
            className={styles["agreement-btn"]}>Godkänn minnesblad</button>
            <p
              className={styles.edit}
              onClick={() => {
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