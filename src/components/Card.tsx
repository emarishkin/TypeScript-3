import { ReactNode, useState } from "react"
import {FC} from "react"


export enum cardVariant{
    noob='nood',
    pro='pro'
}


interface CardProps{
    width:number
    height:number
    children:ReactNode
    variant:cardVariant
    onClick: (num:any)=>any
}


const Card:FC<CardProps> = ({width,height,children,variant,onClick}) => {

    const [state,setState] = useState(0)
    return(
        <div onClick={()=>onClick(setState(state+1))} style={{width,height,border:variant===cardVariant.pro?'22px solid black':'none',backgroundColor:variant===cardVariant.noob?'red':'green'}}>
         {children}
        </div>
    )
}
export default Card