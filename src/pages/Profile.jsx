import React, { useContext, useEffect } from 'react'
import userContext from '../context/User/UserContext'

const Profile = () => {
    const {selectedUser} = useContext(userContext)
    return (
        <>
            {!selectedUser?<p>no existe usuarios</p>:(
                    <img src={selectedUser.avatar}/>
            )}
        </>
    )
}

export default Profile
