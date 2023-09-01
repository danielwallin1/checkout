import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { wrapper } from "../store/store";
import Info from "../components/info/info";
import Card from "../components/card/card";
import Amount from "../components/amount/amount";
import Contact from "../components/contact/contact";
import Payment from "../components/payment/payment";
import Modal from "../components/modal/modal";
import { selectDeceasedState, selectIconState, selectModalState } from "../store/donationSlice";

const Home: NextPage = () => {
  const deceased = useSelector(selectDeceasedState);
  const icon = useSelector(selectIconState);
  const isVisible = useSelector(selectModalState);

  return (
    <div style={{ width: "700px", margin: "150px auto"}}>
      <div style={{ display: "flex", position: "relative" }}>
        <Info deceased={deceased} />
        <Card deceased={deceased} icon={icon} />
      </div>
      <Amount />
      <Contact />
      <Payment />
      <Modal 
          deceased={deceased}
          icon={icon}
          isVisible={isVisible} />
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      //await store.dispatch(setAuthState(false));

      console.log("State on server", store.getState());

      return {
        props: {
          deceasedState: {},
          modalState: false
        },
      };
    }
);

export default Home;
