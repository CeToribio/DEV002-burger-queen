import "./deliveryOrder.css";

function DeliveryOrder({ data }) {

  return (
    <>
      <div className="containerdeliveryOrder">
        <section>
          <p>CLIENTE : {data.client}</p>
        </section>
        <section className="divPedido">
          <p>PEDIDO :</p>
          <div>
            {data.order.map((element) => {
              return (
                <div key={element.id}>
                  <p>{element.count}</p>
                  <p>{element.name}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="containerTimerButton">
          <p>{data.date.toDate().toLocaleDateString()}</p>
        </section>
      </div>
    </>
  );
}

export default DeliveryOrder;
