import React, { useReducer} from 'react'
import userContext from './UserContext'
import axios from 'axios'
import UserReducer from './UserReducer'
const UserState = (props) => {

    const initialState ={
        users:[],
        selectedUser:null
    } 
    const getUsers = async()=>{
        const res = await axios.get('https://reqres.in/api/users')
        console.log(res.data.data);
        dispatch({
            type:'GET_USERS',
            payload:res.data.data
        })
    }
    
    const getProfile  =async(id)=>{
        const res = await axios.get('https://reqres.in/api/users/'+id)
        console.log(res)
        dispatch({
            type:'GET_PROFILE',
            payload:res.data.data
        })
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)


    return (
        <userContext.Provider value={{
            users:state.users,
            selectedUser:state.selectedUser,
            getUsers,
            getProfile,
        }}> 
            {props.children}
        </userContext.Provider>
    )
}

export default UserState
