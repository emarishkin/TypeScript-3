import Card, { cardVariant } from "./components/Card"
import Product from "./Product"
import {products} from './products'


function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div>
        {products.map((product)=><Product product={product} key={product.id}/>)} 
        <Card variant={cardVariant.pro} height={400} width={400}>
        <button>Click</button>  
        </Card>        
      </div>
    </>
  )
}

export default App
