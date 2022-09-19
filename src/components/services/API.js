import axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};

let axiosInstance = axios.create(options);


const getUsers = () =>  axiosInstance('/users');
const getUser = (id) => axiosInstance('/users/' + id)

const getUsersPosts = () =>  axiosInstance('/posts'); // posts of all users
const getUserPosts = (id) =>  axiosInstance('/users/' + id + '/posts'); // posts of one user

export {getUsers, getUser, getUserPosts, getUsersPosts};


