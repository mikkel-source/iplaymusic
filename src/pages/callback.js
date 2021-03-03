import { useCallback, useEffect } from "react"

import axios from "axios"
import TokenContext from "../pages/tokenContext"
import { useContext } from "react" 
import { navigate} from "@reach/router"
export default function Callback(props) {
    var[token, setToken] = useContext(TokenContext)

    var code = new URLSearchParams(props.location.search).get("code");
    useEffect(function() {

        axios.post("/.netlify/functions/token", JSON.stringify({
                code
    }))
    
     .then(response => {
         setToken(response.data)
         navigate("/featured")
        });
}, [setToken, code])
    return null;

}