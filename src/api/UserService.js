import axios from "axios"
const api = axios.create({ baseURL: "http://jsonplaceholder.typicode.com" })
export const getUsers = () => api.get("/users").then(r => r.data)
export const getUser = id => api.get(`/users/${id}`).then(r => r.data)
export const createUser = data => api.post("/users", data).then(r => r.data)
export const updateUser = (id, data) => api.put(`/users/${id}`, data).then(r => r.data)
export const deleteUser = id => api.delete(`/users/${id}`).then(r => r.data)
// export const getUsersData=async()=>{
//     let response= await fetch("https://jsonplaceholder.typicode.com/users");
//     if(response.ok===true){
//         let data= await response.json();
//        return data;
//     }

    
// }