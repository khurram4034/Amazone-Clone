import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-project-48ad6/us-central1/api'
});

export default instance;
