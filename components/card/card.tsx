import { useEffect } from "react";
import { _Message } from "../../interfaces/interfaces";
import styles from "./card.module.css";

const Card = ({ deceased, icon }:_Message) => {
  const image = require(`../../static/images/${icon}.webp`).default.src;

  useEffect(() => {
  }, [deceased]);

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
      <div className={styles.logo}></div>
    </div>
  )
};

export default Card;