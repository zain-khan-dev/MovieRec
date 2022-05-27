import { MovieSchema } from "../utility/Constants"
import {useState} from "react"
import { useEffect } from "react"
import { getAuthData } from "../utility/utils"

const Movies = () => {

    const [movies, setMovies] = useState<MovieSchema[]>([])


    useEffect(()=>{
        getAuthData("3/movie/latest")
        .then((result)=>{
            console.log(result.data)
        })
    }, [])


    if(movies.length === 0){
        return(<div>Loading</div>)
    }
    else{
        return(
            <div>{movies.map(movie=><div>{movie.name}</div>)}</div>
        )
    }
}

export default Movies