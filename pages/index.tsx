import type { NextPage } from "next";
import { useSelector } from "react-redux";
import data from "../data/data.json";
import Accordion from "../components/accordion/accordion";
import PreviewCard from "../components/card/previewCard";
import Info from "../components/checkout/info/info";
import Amount from "../components/checkout/amount/amount";
import Contact from "../components/checkout/contact/contact";
import Payment from "../components/checkout/payment/payment";
import DonationCard from "../components/card/donationCard";
import Modal from "../components/modal/modal";
import { _Keyable } from "../interfaces/interfaces";
import { selectDeceasedState, selectIconState, selectModalState } from "../store/donationSlice";
import { setActiveState, selectActiveState, selectCompletedState } from "../store/stepSlice";

const Home: NextPage = () => {
  const deceased:any = useSelector(selectDeceasedState);
  const icon:string = useSelector(selectIconState);
  const isVisible:boolean = useSelector(selectModalState);

  function renderAccordion() {
    return (
      data.steps.map((step:_Keyable) => {
        const isInfo:boolean = step.name === "info";
        const isAmount:boolean = step.name === "amount";
        const isContact:boolean = step.name === "contact";
        const isPayment:boolean = step.name === "payment";

        return (
          <div key={step.name}>
            <Accordion
              label={step.label}
              name={step.name}
              isActive={selectActiveState}
              isCompleted={selectCompletedState}
              action={setActiveState}>
              <div>
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
                {isPayment && <Payment />}
              </div> 
            </Accordion>
          </div>
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

export default Home;
