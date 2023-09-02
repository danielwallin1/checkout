import { setDeceasedState, setIconState, selectIconState, setModalState } from "../../store/donationSlice";
import { setActiveState, selectActiveState, selectCompletedState } from "../../store/stepSlice";
import { _Deceased } from "../../interfaces/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import data from "../../data/data.json";
import styles from "./info.module.css";

const Info = ({ deceased }:_Deceased) => {
  const dispatch = useDispatch();
  const icon = useSelector(selectIconState);
  const isActive = useSelector(selectActiveState);
  const isCompleted = useSelector(selectCompletedState);
  const accordionClass = isCompleted.info ? "accordion--active" : "accordion";
  const [name, setName] = useState("");
  const [showDeceasedList, setShowDeceasedList ] = useState(false);
  const [showDeceasedInfo, setShowDeceasedInfo ] = useState(false);

  function renderName() {
    return (
      <div className={styles.user}>
        <p className={styles.emphasized}>Vem vill du hedra?</p>
        <p>
          Sök efter personen genom att
          fylla i namnet,så skickar vi
          minnesbladet direkt till
          begravningsbyrån.
        </p>
        <p>Den avlidnes namn:</p>
        <input
          type="text"
          onFocus={() => {
            setShowDeceasedList(true);
            setShowDeceasedInfo(false);
          }}
          onChange={event => {
            setName(event.target.value);
            dispatch(setDeceasedState({ ...deceased, name: event.target.value }));
          }}
          className={styles.textfield}
          placeholder="Den avlidnes namn"
          value={name}
        />
      </div>
    )
  }

  function renderMessage() {
    return (
      <div>
        <p>Skriv en hälsning och ditt/era namn</p>
        <textarea
          onChange={event => dispatch(setDeceasedState({ ...deceased, message: event.target.value }))}
          className={styles.textarea}
          placeholder="Hälsning på minnesblad">
            
        </textarea>
      </div>
    )
  }

  function renderDeceasedList() {

    return (
      name.length > 2 &&
      showDeceasedList &&
      <div>
        <div className={styles["name-wrapper"]}>
          <ul className={styles["name-list"]}>
            {data.persons.map(person => {
              return (
                <li key={person.name} onClick={event => {
                  event.preventDefault();
                  setName("");
                  setShowDeceasedInfo(true);
                  setShowDeceasedList(false);
                  dispatch(setDeceasedState(
                    {
                      ...deceased,
                      lifespan: person.lifespan,
                      city: person.city,
                      funeral: person.funeral,
                      name: person.name
                    }))
                  }}
                className={styles["name-list-item"]}>
                <div className={styles["person-wrapper"]}>
                  <p className={styles["person-name"]}>{person.name}</p>
                  <p className={styles["person-lifespan"]}>{person.lifespan}, {person.city}</p>
                  <p className={styles["person-funeral"]}>{person.funeral}</p>
                </div>
                <button className={styles["name-list-btn"]}>Välj</button>
                </li>
              )})}
          </ul>
        </div>
      </div>
    )
  }

  function renderFlowers() {
    return (
      <div className={styles.flowers}>
        {data.flowers.map((flower:any) => {
          const image = require(`../../static/images/${flower.file}.webp`).default.src;
          return (
            <div
              key={flower.name}
              onClick={() => {
                dispatch(setIconState(flower.file))
              }}
              >
              <img
                className={flower.file === icon
                  ? styles['flower-active']
                  : styles['flower']}
                src={String(image)}
                alt="flower"/>
              <p className={styles.flowername}>{flower.name}</p>
            </div>
          )
        })}
      </div>
    )
  }

  function renderSelected() {
    return (
      showDeceasedInfo &&
      <div className={styles["info-wrapper"]}>
          <div className={styles["donation-info"]}>
            <p className={styles["donation-name"]}>{deceased.name}</p>
            <p className={styles["donation-lifespan"]}>{deceased.lifespan}</p>
            <p className={styles["donation-city"]}>{deceased.city}</p>
            <p className={styles["donation-funeral"]}>{deceased.funeral}</p>
          </div> 
      </div>
    )
  }

  function renderSections() {
    return (
      <div>
        {renderName()}
        {renderSelected()}
        {renderDeceasedList()}
        {renderMessage()}
        {renderFlowers()}
        <button
          className={styles["step-button"]}
          onClick={() => { dispatch(setModalState(true)); }}>
          Välj belopp
      </button>
    </div>
    )
  }

  function renderInfo() {
    return (
      <div className={styles["info-text"]}>
        <p className={styles.info}><span className={styles["info-prefix"]}>Namn:</span>{deceased.name}</p>
        <p className={styles.info}><span className={styles["info-prefix"]}>Meddelande:</span>{deceased.message}</p>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <button
          className={styles[accordionClass]}
          >
          <h3 className={styles["step-header"]}>
            1. Minnesblad
          </h3>
          {!isActive.info &&
            <p onClick={() => {
              dispatch(setActiveState("info"))
            }} className={styles["edit-button"]}>Ändra</p>
          }
      </button>
      {isActive.info && renderSections()}
      {isCompleted.info && renderInfo()}
    </div>
  )
};

export default Info;