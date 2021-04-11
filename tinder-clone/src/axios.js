import axios from 'axios';

const instance = axios.create({
    baseURL:"https://tinder-backend-vup.herokuapp.com/",
})

export default instance;