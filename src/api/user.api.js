import axios from 'axios';

// const createUserRequest = async (user) => {
//     await axios.post('https://door-ipn.ddns.net:3001/create',user)
// }

export const getUserRequest = async () => {
    await axios.get('https://door-ipn.ddns.net:3001/users')
}

export const createUserRequest = async (user) => {
    console.log(user);
    console.log("Estos son los datos")
    alert(JSON.stringify(user, null, 2));
    await axios.post('https://door-ipn.ddns.net:3001/setuser',user)
    console.log("Enviado")
}
