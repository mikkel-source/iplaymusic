import AlbumNavbar from "./album__navbar"
import FeaturedCard from "./featuredcard";
import "./feautured.scss";
import { useContext, useEffect, useState} from "react"

import Drawer from "./featured__drawer"
import TokenContext from "../pages/tokenContext"
import axios from "axios";

export default function Featured() {
    var [token] = useContext(TokenContext)
    var[content, setContent] = useState({})
    useEffect(function() {
        axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => {
            setContent(response.data)
            console.log(response.data)
        })
    }, [token, setContent])
    
    

    
    
    return (
        <div className="featuredpage">
        <AlbumNavbar title="featured"/>
        {content.playlists?.items.map(item => <FeaturedCard key={item.id} image={item.images[0].url} title={item.name} genre={item.type}/>)}
        <FeaturedCard image="/pexels-photo-1816943.png" title="hey" genre="soundtrack" />
        <FeaturedCard image="/pexels-photo-1816943.png" title="hey" genre="soundtrack" />
        <FeaturedCard image="/pexels-photo-1816943.png" title="hey" genre="soundtrack" />
        <FeaturedCard image="/pexels-photo-1816943.png" title="hey" genre="soundtrack" />
        <FeaturedCard image="/pexels-photo-1816943.png" title="hey" genre="soundtrack" />
        <FeaturedCard image="/pexels-photo-1816943.png" title="hey" genre="soundtrack" />
        <Drawer />

                </div>
    )
    }

