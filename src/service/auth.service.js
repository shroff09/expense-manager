import axios from 'axios';

const login = async (username, password) => {
    const {data} = await axios.post('http://localhost:3003/api/login', {
        username,
        password
    });
    return data;
};

const signUp = async (firstName, lastName, username, password) => {
    const {data} = await axios.post('http://localhost:3003/api/signup', {
        firstName, lastName, username, password
    });
};

export default {
    login,
    signUp
}