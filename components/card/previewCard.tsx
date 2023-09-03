import { _Card } from "../../interfaces/interfaces";
import styles from "./previewCard.module.css";

const PreviewCard = ({ deceased, icon }:_Card) => {
  const image:string = require(`../../static/images/${icon}.webp`).default.src;

  return (
    <div className={styles.card}>
      <div className={styles["card-inner"]}>
        <h3 className={styles.heading}>Din minneshälsning</h3>
        <div>
          <div  className={styles["content"]}>
            <img className={styles.icon} src={image} />
            <p className={styles["card-info"]}>Till minne av</p>
            <p className={styles["card-name"]}>{deceased.name}</p>
            <p className={styles["card-info"]}>har Hjärnfonden tacksamt mottagit en gåva till forskning om hjärnan</p>
            <p className={styles["card-message"]}>{deceased.message}</p>
          </div>
        </div>
      </div>
      <img className={styles.logo} src="https://www.hjarnfonden.se/next/images/hjarnfonden-logo.svg" alt="logo" />
    </div>
  )
};

export default PreviewCard;