import { useDispatch } from "react-redux";
import { _Card } from "../../interfaces/interfaces";
import { setModalState } from "../../store/donationSlice";
import { setActiveState } from "../../store/stepSlice";
import styles from "./donationCard.module.css";

const DonationCard = ({ deceased, icon }:_Card) => {
  const dispatch = useDispatch();
  const image:string = require(`../../static/images/${icon}.webp`).default.src;

  return (
    <div className={styles.wrapper}>
      <div className={styles["card"]}>
        <div className={styles["card-inner"]}>
          <div>
            <div  className={styles["content"]}>
              <img className={styles.icon} src={image} alt="flower-icon" />
              <p className={styles["card-info"]}>Till minne av</p>
              <p className={styles["card-name"]}>{deceased.name}</p>
              <p className={styles["card-info"]}>har Hjärnfonden tacksamt mottagit en gåva till forskning om hjärnan</p>
              <p className={styles["card-message"]}>{deceased.message}</p>
            </div>
          </div>
          <img className={styles.logo} src="https://www.hjarnfonden.se/next/images/hjarnfonden-logo.svg" alt="logo" />
        </div>
        <div className={styles["agreement-wrapper"]}>
          <p>Ser allt rätt ut?</p>
          <p>Godkänn minnesblad för att fortsätta.</p>
          <button onClick={() => {
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
  )
};

export default DonationCard;