import { FC } from "react"
import { IUser } from "./types"


interface UserListProps{
  users:IUser[]
}

const UserList:FC<UserListProps> = ({users}) => {
    return (
        <div >
          {users.map(user=>
          <div key={user.id}>
            {user.id}.{user.name} проживает по адресу {user.addres.street} в городе {user.addres.city}
          </div>)}
        
        </div>
    )
}
export default UserList