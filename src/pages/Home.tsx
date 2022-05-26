import { useEffect } from "react"
import { getMovies } from "../utility/utils"

const Home = () => {


    useEffect(()=>{
        getMovies("")
    }, [])


    return (
        <div>This is home</div>
    )
}

export default Home