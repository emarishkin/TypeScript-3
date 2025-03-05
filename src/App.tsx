import Card, { cardVariant } from "./components/Card"
import { IUser } from "./components/types"
import UserList from "./components/UserList"
import Product from "./Product"
import {products} from './products'


function App() {

const users:IUser[] = [
  {id:1,name:'egor',addres:{street:'nnnnnanananbfd',city:'samara'}},
  {id:2,name:'igor',addres:{street:'nnnnnanananbfd',city:'samara'}}
]


  return (
    <>
      <h1>Vite + React</h1>
      <div>
        {products.map((product)=><Product product={product} key={product.id}/>)} 
        <Card  variant={cardVariant.pro} height={400} width={400}>
        <button>Click</button>  
        </Card> 
         <UserList users={users} />     
      </div>
    </>
  )
}

export default App
