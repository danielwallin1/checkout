import { useState } from "react";
import { setDonatorState, selectDonatorState } from "../../../store/donationSlice";
import { setActiveState, selectActiveState, selectCompletedState } from "../../../store/stepSlice";
import { _Keyable } from "../../../interfaces/interfaces";
import { useDispatch, useSelector } from "react-redux";
import styles from "./contact.module.css";

const Contact = () => {
  const dispatch = useDispatch();
  const donator:_Keyable = useSelector(selectDonatorState);
  const isActive:_Keyable = useSelector(selectActiveState);
  const isCompleted:_Keyable = useSelector(selectCompletedState);
  const [isAddressOpen, setIsAddressOpen] = useState<boolean>(false);

  function renderContact() {
    const toggleClass:string = isAddressOpen ? "toggle-closed" : "toggle-open";
    const addressClass:string = isAddressOpen ? "address-open" : "address-closed";

    return (
      <div> 
        <div className={styles.socialnumber}>
          <p>Personnummer</p>
          <input
          type="text"
          onChange={event => {
            event.preventDefault();
            dispatch(setDonatorState({ ...donator, social: event.target.value }))
          }}
          className={styles.textfield}
          placeholder="ÅÅÅÅMMDDNNNN"
          value={donator.social}
        />
        <p>Hämta dina uppgifter automatiskt genom att fylla i ditt personnummer.</p>
        </div>
        <div className={styles.contact}>
          <p onClick={() => {
            setIsAddressOpen(!isAddressOpen);
          }}
          className={styles[toggleClass]}>Fyll i själv</p>
          <div className={styles[addressClass]} >
            <div>
              <p>Förnamn</p>
              <input
                type="text"
                onChange={event => {
                  dispatch(setDonatorState({ ...donator, firstname: event.target.value }))
                }}
                className={styles.textfield}
                placeholder="Förnamn"
                value={donator.firstname}
              />
            </div>
            <div>
              <p>Efternamn</p>
              <input
                type="text"
                onChange={event => {
                  dispatch(setDonatorState({ ...donator, lastname: event.target.value }))
                }}
                className={styles.textfield}
                placeholder="Efternamn"
                value={donator.lastname}
              />
            </div>
            <div>
              <p>Gatuadress</p>
              <input
                type="text"
                onChange={event => {
                  dispatch(setDonatorState({ ...donator, street: event.target.value }))
                }}
                className={styles.textfield}
                placeholder="Gatuadress"
                value={donator.street}
              />
            </div>
            <div>
              <p>Postadress</p>
              <input
                type="text"
                onChange={event => {
                  dispatch(setDonatorState({ ...donator, postal: event.target.value }))
                }}
                className={styles.textfield}
                placeholder="Postadress"
                value={donator.postal}
              />
            </div>
            <div>
              <p>Porstort</p>
              <input
                type="text"
                onChange={event => {
                  dispatch(setDonatorState({ ...donator, city: event.target.value }))
                }}
                className={styles.textfield}
                placeholder="Postort"
                value={donator.city}
              />
            </div>
            <div>
              <p>Email</p>
              <input
                type="email"
                onChange={event => {
                  dispatch(setDonatorState({ ...donator, email: event.target.value }))
                }}
                className={styles.textfield}
                placeholder="ex. namn@domän.se"
                value={donator.email}
              />
            </div>
            <div>
              <p>Mobilnummer</p>
              <input
                type="phone"
                onChange={event => {
                  dispatch(setDonatorState({ ...donator, phone: event.target.value }))
                }}
                className={styles.textfield}
                placeholder="ex. 0710203040"
                value={donator.phone}
              />
            </div>
            <p className={styles.agreement}>Genom att gå vidare samtycker jag till att mina personuppgifter behandlas i enlighet med Hjärnfondens integritetspolicy</p>
          </div>
        </div>
      </div>
    )
  }

  function renderSections() {
    return (
      <div>
        {renderContact()}
        <button
          className={styles["step-button"]}
          onClick={event => {
            event.preventDefault();
            dispatch(setActiveState("payment"))
          }}>
          Välj betalmetod
        </button>
      </div>
    )
  }

  function renderInfo() {
    return (
      <div className={styles["donator-wrapper"]}>
        <p className={styles["donator-info"]}>
          <span className={styles["donator-prefix"]}>Förnamn:</span>
          {donator.firstname}
        </p>
        <p className={styles["donator-info"]}>
          <span className={styles["donator-prefix"]}>Efternamn:</span>
          {donator.lastname}
        </p>
        <p className={styles["donator-info"]}>
          <span className={styles["donator-prefix"]}>Gatuadress:</span>
          {donator.street}
        </p>
        <p className={styles["donator-info"]}>
          <span className={styles["donator-prefix"]}>Postnummer:</span>
          {donator.postal}
        </p>
        <p className={styles["donator-info"]}>
          <span className={styles["donator-prefix"]}>Postort:</span>
          {donator.city}
        </p>
        <p className={styles["donator-info"]}>
          <span className={styles["donator-prefix"]}>E-post:</span>
          {donator.email}
        </p>
        <p className={styles["donator-info"]}>
          <span className={styles["donator-prefix"]}>Mobiltelefon:</span>
          {donator.phone}
        </p>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      {isActive.contact && renderSections()}
      {isCompleted.contact && renderInfo()}
    </div>
  )
};

export default Contact;