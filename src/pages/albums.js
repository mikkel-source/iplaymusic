import AlbumNavbar from "../components/album__navbar"
import Albumslider from "../components/album__slider"
import TokenContext from "./tokenContext"
import {useContext, useEffect, useState } from "react"
import axios from "axios"
export default function Albums() {
    var[token] = useContext(TokenContext)
    var [content, setContent] = useState({})

    useEffect(function() {
    axios.get("https://api.spotify.com/v1/me",{
        headers: {
            "Authorization": "Bearer" + token.acces_token
        }
    }) 
    .then(response => setContent(response.data))
}, [token, setContent])
    return (
        <>
        <AlbumNavbar title="featured" />
        <Albumslider />
        
        </>
    )
}
