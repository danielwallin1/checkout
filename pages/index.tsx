import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { wrapper } from "../store/store";
import data from "../data/data.json";
import Accordion from "../components/accordion/accordion";
import PreviewCard from "../components/card/previewCard";
import Info from "../components/checkout/info/info";
import Amount from "../components/checkout/amount/amount";
import Contact from "../components/checkout/contact/contact";
import Payment from "../components/checkout/payment/payment";
import DonationCard from "../components/card/donationCard";
import Modal from "../components/modal/modal";
import { selectDeceasedState, selectIconState, selectModalState } from "../store/donationSlice";
import { setActiveState, selectActiveState, selectCompletedState } from "../store/stepSlice";
import { ReactElement } from "react";

const Home: NextPage = () => {
  const deceased = useSelector(selectDeceasedState);
  const icon:any = useSelector(selectIconState);
  const isVisible = useSelector(selectModalState);

  function renderAccordion() {
    return (
      data.steps.map(step => {
        const isInfo:any = step.name === "info";
        const isAmount = step.name === "amount";
        const isContact = step.name === "contact";
        const isPayment = step.name === "payment";

        return (
          <Accordion
            label={step.label}
            name={step.name}
            isActive={selectActiveState}
            isCompleted={selectCompletedState}
            action={setActiveState}>
            
            {isInfo && 
              <div style={{ display: "flex", position: "relative" }}>
                <Info deceased={deceased}/>
                <PreviewCard deceased={deceased} icon={icon} />
                <Modal isVisible={isVisible}>
                  <DonationCard deceased={deceased} icon={icon} />
                </Modal>
              </div>
            }
            {isAmount && <Amount />}
            {isContact && <Contact />}
            {isPayment && <Payment /> }  
          </Accordion>
        )
      }
    ))
  }

  return (
    <div style={{ width: "700px", margin: "150px auto"}}>
      {renderAccordion()}
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // await store.dispatch(setAuthState(false));
      // console.log("State on server", store.getState());

      return {
        props: {},
      };
    }
);

export default Home;
