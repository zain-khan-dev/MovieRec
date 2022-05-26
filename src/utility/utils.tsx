import axios from "axios"

const getAxiosInstance = () => {

    return axios.create({
        baseURL: 'https://api.themoviedb.org/',
        headers: {'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}
    });
}



export const getMovies = (url:string) => {

    getAxiosInstance()
    .get("3/discover/movie")
    .then((result)=>{
        console.log(result)
    })
    .catch((e)=>{
        console.log(e)
    })
}