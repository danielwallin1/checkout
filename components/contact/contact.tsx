import { useState } from "react";
import { setDonatorState, selectDonatorState, setActiveState, selectActiveState, selectCompletedState, setCompletedState, setDirtyState, selectDirtyState } from "../../store/donationSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./contact.module.css";

const Contact = ({}) => {
  const dispatch = useDispatch();
  const donator = useSelector(selectDonatorState);
  const isActive = useSelector(selectActiveState);
  const isCompleted = useSelector(selectCompletedState);
  const isDirty = useSelector(selectDirtyState);
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const accordionClass = !isActive.contact && isDirty.contact ? "button--active" : "button";

  function renderContact() {

    const toggleClass = isAddressOpen
      ? "toggle-closed" : "toggle-open";
    const addressClass = isAddressOpen
      ? "address-open" : "address-closed";

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
                contact: true,
                payment: false
              })
            )
            dispatch(
              setDirtyState({
                ...isDirty,
                contact: true,
                payment: true
              })
            )
          }}>
          Välj betalmetod
        </button>
      </div>
    )
  }

  function renderInfo() {
    return (
      <div className={styles["contact-wrapper"]}>
       <p className={styles["contact-info"]}><span className={styles["contact-prefix"]}>Förnamn:</span>{donator.firstname}</p>
       <p className={styles["contact-info"]}><span className={styles["contact-prefix"]}>Efternamn:</span>{donator.lasttname}</p>
       <p className={styles["contact-info"]}><span className={styles["contact-prefix"]}>Gatuadress:</span>{donator.street}</p>
       <p className={styles["contact-info"]}><span className={styles["contact-prefix"]}>Postnummer:</span>{donator.postal}</p>
       <p className={styles["contact-info"]}><span className={styles["contact-prefix"]}>Postort:</span>{donator.city}</p>
       <p className={styles["contact-info"]}><span className={styles["contact-prefix"]}>E-post:</span>{donator.email}</p>
       <p className={styles["contact-info"]}><span className={styles["contact-prefix"]}>Mobiltelefon:</span> {donator.phone}</p>
     </div>
   )
  }

  return (
    <div>
       <button
          className={styles[accordionClass]}
          >
          <h3 className={styles["step-header"]}>
            3. Kontaktuppgifter
          </h3>
          {!isActive.contact &&
            isCompleted.contact &&
            <p onClick={() => {
              dispatch(
                setActiveState({
                  info: false,
                  amount: false,
                  contact: true,
                  payment: false
                })
              )
              dispatch(
                setCompletedState({
                  ...isCompleted,
                  contact: false
                })
              )
            }} className={styles["edit-btn"]}>Ändra</p>
          }
      </button>
      {isActive.contact && renderSections()}
      {isCompleted.contact && renderInfo()}
    </div>
  )
};

export default Contact;