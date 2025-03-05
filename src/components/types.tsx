
interface IAddres{
    street:string
    city:string
}

export interface IUser{
    name:string
    id:number
    addres:IAddres
}