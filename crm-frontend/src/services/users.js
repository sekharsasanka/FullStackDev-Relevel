import axios from 'axios';

const BASE_URL = "http://localhost:8000/crmapp/api/v1/";
const access_token = localStorage.getItem("token");
axios.defaults.headers.common['x-access-token'] = access_token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const getAllUsers = async() =>{
    const response = await axios.get(BASE_URL+'users/');
    return response;
}

export const updateUserData = async(data) =>{
    const response =  await axios.patch(BASE_URL+'user/updateUser', data);
    return response;
}