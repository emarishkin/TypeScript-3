import {useState } from "react"
import IProd from "./interfaceProduct"


interface ProductProops{
product:IProd
}

const Product = (props:ProductProops) => {
const [click,setClick] = useState<boolean>(false)



    return (
       <div style={{width:700}}>
        <h1 style={{fontSize:20}}>{props.product.id}</h1>
        <h2 style={{fontSize:15}}>{props.product.title}</h2>
        <img style={{width:110,height:110}} src={props.product.image} alt="sdf" />
        <p style={{fontSize:15}}>{props.product.description}</p>
        <button onClick={()=>setClick(prev=>!prev)}>click</button>
        <div>{click && props.product.price}</div>
       </div>
    )
}

export default Product