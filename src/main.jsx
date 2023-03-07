import React from 'react'
import ReactDOM from 'react-dom/client'
import { Product, Menu } from './App'
import hamburguesa from './hamburguesa.png'
import bebida from './agua.png'

const root = ReactDOM.createRoot(document.getElementById('root'))

const hamburguesas = { name: "HAMBURGUESAS", img: "hamburguesa" }
const bebidas = { name: "BEBIDAS", img: "bebida" }

//const productoPrueba = { name: "Hamburguesa", cost: "10" }
const hCarne = { name: "Hamburguesa de carne ", cost: "s/.15" }
const hPollo = { name: "Hamburguesa de pollo ", cost: "s/.15" }
const hVegetariana = { name: "Hamburguesa vegetariana ", cost: "s/.15" }
const hMixto = { name: "Hamburguesa mixta ", cost: "s/.20" }
const papas = { name: "papas fritas", cost: "s/.10" }

const cafeAmericano = { name: "Café americano ", cost: "5" }
const gaseosaL = { name: "Gaseosa 1L", cost: "15" }
const gaseosaMl = { name: "Gaseosa 500 ml", cost: "10" }
const aguaL = { name: "Agua mineral 1L", cost: "15" }
const aguaMl = { name: "Agua mineral 500 ml", cost: "10" }

//crear los objetos para luego renderizarlos

root.render(
  <>
    <p>Hola</p>
    <Menu data={hamburguesas} />
    <Menu data={bebidas} />
    {/* <Product product={"Agua 1l"} cost={"s/. 10"} /> */}
    <Product products={hCarne} type={hamburguesa} />
    <Product products={hPollo} type={hamburguesa} />
    <Product products={hVegetariana} type={hamburguesa}  />
    <Product products={hMixto} type={hamburguesa} />
    <Product products={papas} type={hamburguesa}  />
    <Product products={cafeAmericano} />
    <Product products={gaseosaL} />
    <Product products={gaseosaMl} />
    <Product products={aguaL} />
    <Product products={aguaMl} />

  </>
)

