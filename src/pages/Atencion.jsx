import { Header } from "../componentes/Header";
// //import { Product } from "./componentes/product"
import { Menu } from "../componentes/Menu";
import Button from "../componentes/Button";

function Atencion() {
  return (
    <>
      <Header/>
      <Menu/>
      <Button name="Pedidos Listos"/>
    </>
  );
}

export default Atencion