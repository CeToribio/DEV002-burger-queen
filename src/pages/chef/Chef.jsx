import Header from "../../components/header/Header";
import PendingOrder from "../../components/pendingorder/PendingOrder";
import "./chef.css";
import {
  orderCollection,
  updateDoc,
  doc,
  db,
  query,
  orderBy,
} from "../../firebase/firebase";
import { useEffect, useState } from "react";
import ReadyOrder from "../../components/readyOrder/ReadyOrder";
import { onSnapshot } from "firebase/firestore";
import imghome from "../../assets/homeG.png";
import { useNavigate } from "react-router-dom";

function Chef({ user }) {
  const navigate = useNavigate();

  const [order, setOrder] = useState([]);

  useEffect(() => {
    const orderData = query(orderCollection, orderBy("date", "asc"));
    onSnapshot(orderData, (snapshot) => {
      const docFilter = snapshot.docs.filter(
        (doc) => doc.data().state === "pending"
      );
      setOrder(docFilter.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);


  const [orderReady, setOrderReady] = useState([]);

  useEffect(() => {
    const orderData = query(orderCollection, orderBy("date", "desc"));

    onSnapshot(orderData, (snapshot) => {
      const docFilter = snapshot.docs.filter(
        (doc) => doc.data().state === "ready"
      );
      setOrderReady(docFilter.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const handleStateReady = async (order) => {
    const newOrder = doc(db, "NewOrder", order.id);
    const data = { state: "ready" };
    await updateDoc(newOrder, data);
  };

  return (
    <>
      <Header user={user} />
      <div className="containerPendingReady">
        <section className="orders orderPending">
          <h2>PEDIDOS PENDIENTES</h2>
          <div className="divOrdersPending">
            {order.map((element) => (
              <PendingOrder
                key={element.id}
                data={element}
                ready={handleStateReady}
              />
            ))}
          </div>
        </section>
        <section className="orders orderReady">
          <h2>PEDIDOS LISTOS</h2>
          <div className="divOrdersReady">
            {/* {ready.map(e => console.log(e))} */}
            {orderReady.map((element) => (
              <ReadyOrder key={element.id} data={element} />
            ))}
          </div>
        </section>
      </div>
      <div className="btnHomeChef">
        <img
          src={imghome}
          alt="home"
          className="imgHomeChef"
          onClick={() => navigate("/home")}
        />
      </div>
    </>
  );
}

export default Chef;
