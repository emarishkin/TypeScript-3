
interface CardProps{
    width:number
    height:number
    children:React.ReactNode
}


const Card = ({width,height,children}:CardProps) => {
    return(
        <div style={{width,height, backgroundColor:'red'}}>
          {children}
        </div>
    )
}
export default Card