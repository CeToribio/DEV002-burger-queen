import { Product } from "../componentes/product.jsx"
import { useState } from "react"
import products from '../products.json'
console.log(products)


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

// export function Menu({ data }) {
//     //const state = useState(false)
//     //devuelve un array con dos posiciones false y true(formatear)
//     // console.log(state)
//     // const choose = state[0]
//     // const setChoose = state[1]
    
//     return (

//       data.map((product) => {
//         const {name, cost} = product
//         return (
//           <Product>
//             name = {name}
//             cost = {cost}
//           </Product>
          
//         )
        
//       })
//     )
//   }