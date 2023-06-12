import axios from 'axios';

// const createUserRequest = async (user) => {
//     await axios.post('https://door-ipn.ddns.net:3001/create',user)
// }
export const createUserRequest = async (user) => 
    await axios.post('http://localhost:3001/setuser',user);
