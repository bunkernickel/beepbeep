
import UserList from './UsersComp/UserList.js';
import React, { useState, useRef } from 'react';

function Users()  {
    const [users, addUsers] = useState([])
    const addUserNameRef = useRef()

    function handleAddUser(e){
        const name = addUserNameRef.current.value
        
        if (name === '') return
        console.log(name)
        addUsers(prevUsers => {
            return [...prevUsers, {id: 1, name:{name}}]
        })
        addUserNameRef.current.value = null
    }
    
    return (
        <div>
    
            <div>
                <h2>Users Page</h2>
            </div>
            <div>Add a user</div>    
            <input ref={addUserNameRef} type = "text" />
            
            <button>Clear User List</button>
        
            <UserList users = {users} />
            
    
        </div>
    );
}

export default Users;