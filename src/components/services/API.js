import axios from 'axios';

// export default axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com',
//     headers: {}
// });

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};

let axiosInstance = axios.create(options);
// axiosInstance('/users');


// const getUsers = () => {return axiosInstance('/users');};
const getUsers = () =>  axiosInstance('/users');
const getUser = (id) => axiosInstance('/users/' + id)

export {getUsers, getUser};
