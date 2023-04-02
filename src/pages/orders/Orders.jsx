import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import "./orders.css";
import DeliveryOrder from "../../components/deliveryOrder/DeliveryOrder";
import { useNavigate } from "react-router-dom";
import ReadyOrder from "../../components/readyOrder/ReadyOrder";
import { useState, useEffect } from "react";
import {
  orderCollection,
  updateDoc,
  doc,
  db,
  query,
  orderBy,
  onSnapshot,
} from "../../firebase/firebase";

function Orders({ user }) {
  const navigate = useNavigate();

  const [orderReady, setOrderReady] = useState([]);

  useEffect(() => {
    const orderData = query(orderCollection, orderBy("date", "asc"));
    
    onSnapshot(orderData, (snapshot) => {
      const docFilter = snapshot.docs.filter(
        (doc) => doc.data().state === "ready"
      );
      
      setOrderReady(docFilter.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const [orderDelivery, setOrderDelivery] = useState([]);

  useEffect(() => {
    const orderData = query(orderCollection, orderBy("date", "desc"));

    onSnapshot(orderData, (snapshot) => {
      const docFilter = snapshot.docs.filter(
        (doc) => doc.data().state === "delivery"
      );
      setOrderDelivery(docFilter.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const handleStateDelivery = async (orderReady) => {
    const newOrder = doc(db, "NewOrder", orderReady.id);
    const data = { state: "delivery" };
    await updateDoc(newOrder, data);
  };

  return (
    <>
      <Header user={user} />
      <div className="orderReadyGiven">
        <section className="orders orderReadyOrder">
          <h2>PEDIDOS LISTOS</h2>
          <div className="divOrdersReady">
            {orderReady.map((element) => (
              <ReadyOrder
                key={element.id}
                data={element}
                delivery={handleStateDelivery}
              />
            ))}
          </div>
        </section>
        <section className="orders orderGiven">
          <h2>PEDIDOS ENTREGADOS</h2>
          <div className="divOrdersGiven">
            <div>
              {orderDelivery.map((element) => (
                <DeliveryOrder key={element.id} data={element} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="btnNewOrder">
        <Button
          name={"Nueva Orden"}
          onClick={() => {
            navigate("/attention");
          }}
        ></Button>
      </div>
    </>
  );
}

export default Orders;
