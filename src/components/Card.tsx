import { ReactNode } from "react"
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
}


const Card:FC<CardProps> = ({width,height,children,variant}) => {
    return(
        <div style={{width,height,border:variant===cardVariant.pro?'22px solid black':'none',backgroundColor:variant===cardVariant.noob?'red':'green'}}>
         {children}
        </div>
    )
}
export default Card