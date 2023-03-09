import { Product } from "../componentes/product.jsx";
import { useState } from "react";
import products from "../products.json";
import Button from "./Button.jsx";
//import hamburguesa from "./hamburguesa.png";
//import bebida from "./agua.png";
console.log(products);
// const propiedad = data.products.bebidas
// console.log(propiedad)
const HCarne = { name: "Hamburguesa de carne", cost: "s/15"}

export function Menu() {
  const [choose, setChoose] = useState(false)

  const text = choose ? "seleccionado" : "no seleccionado"
  console.log(text)

  const handleClick = () => {
    setChoose(!choose)
  }

  return (
      <>
      <Button name="Hamburguesas" onClick={handleClick}></Button>
      <Button name="Bebidas" onClick={handleClick}></Button>
      {
         products.products.bebidas.map( product => <Product data={product}/> )
      }


      
      </>
    
  );
}


// export function Menu({ data }) {
//   //const state = useState(false)
//   //devuelve un array con dos posiciones false y true(formatear)
//   // console.log(state)
//   // const choose = state[0]
//   // const setChoose = state[1]
//   const [choose, setChoose] = useState(false)

//   const text = choose ? "seleccionado" : "no seleccionado"
//   console.log(text)

//   const handleClick = () => {
//     setChoose(!choose)
//   }

//   const { name, img } = data
//   return (
//     <div>
//       <button onClick={handleClick}>
//         <img src={img} alt="imagen de la elección" />
//         <p>{name}</p>
//       </button>
//     </div>
//   )
// }

// products["bebidas"]
// products.bebidas
// products[miEstado]