import React, { useEffect } from 'react'
import { useContext } from 'react'
import userContext from '../context/User/UserContext'
import './Users.css'
const Users = () => {
    const {getUsers,users,getProfile} = useContext(userContext)//lo traigo a travez del use context
    useEffect(() => {
        getUsers()
        if(users){
            console.log('estoy mostrando los usuarios',users)
        }
    }, [])
    return (
        <div className="list-group h-10">
           {users.map(element=>(
               <a key={element.id} className="list-group-item list-group-item-action d-flex flex-row
               justify-content-start fondo" href="!#" onClick={()=>getProfile(element.id)}> 
               <img className="img-fluid mr-4 rounded-circle" width="70" src={element.avatar}/>
                   <p >{element.first_name}  {element.last_name} {element.email}  </p>
               </a>
              
           ))}
        </div>
    )
}

export default Users
