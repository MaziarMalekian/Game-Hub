import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7d2ef3e364ad4f95994259b3703d68fc'
    }
})