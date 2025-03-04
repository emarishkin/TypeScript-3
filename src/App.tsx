import Product from "./Product"
import {products} from './products'


function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div>

        {products.map((product)=><Product product={product} key={product.id}/>)}
         {/* <Product product={products[0]}/>
         <Product product={products[1]}/>
         <Product product={products[2]}/> */}
         
      </div>
    </>
  )
}

export default App
