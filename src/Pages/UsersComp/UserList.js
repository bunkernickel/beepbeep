import User from './User.js';

const UserList = ({ users }) => {
    return(
        users.map(user => {
            return <User key={user.id} name={user.name} />
        })
    );    
}

export default UserList;