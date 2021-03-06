import axios from "axios"

const getAxiosInstance = () => {

    return axios.create({
        baseURL: 'https://api.themoviedb.org/',
        headers: {'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}
    });
}



export const getAuthData = (url:string) => {

    return getAxiosInstance().get(url)
}


