import {useEffect} from 'react'
import {getUserRequest} from "../api/user.api"

function Users() {
    useEffect(() =>{
        async function loadUsers() {
          const  response = await getUserRequest();
          console.log(response);
        }
        loadUsers();
        //console.log("Users");
      },[])
}
export default Users;