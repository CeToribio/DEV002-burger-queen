import "./App.css"
import { useState } from "react"

// export function Product({ product, cost, data}) {
//   console.log(data)
//   return (
//     <div>
//       <button>
//         <p>{product}</p>
//         <p>{cost}</p>
//       </button>
//     </div>
//   )
// }

export function Product({ products, type }) {
  const show = type ? "hamburguesa" : "no"
  console.log(show)
  const { name, cost } = products
  return (
    <div>
      <button>
        <p>{name}</p>
        <p>{cost}</p>
      </button>
    </div>
  )
}

export function Menu({ data }) {
  //const state = useState(false)
  //devuelve un array con dos posiciones false y true(formatear)
  // console.log(state)
  // const choose = state[0]
  // const setChoose = state[1]
  const [choose, setChoose] = useState(false)

  const text = choose ? "seleccionado" : "no seleccionado"
  console.log(text)

  const handleClick = () => {
    setChoose(!choose)
  }

  const { name, img } = data
  return (
    <div>
      <button onClick={handleClick}>
        <img src={img} alt="imagen de la elección" />
        <p>{name}</p>
      </button>
    </div>
  )
}