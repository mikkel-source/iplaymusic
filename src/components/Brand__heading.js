import "./brand__heading.scss" 
import image from "../images/music-logo.jpg"

export default function Brandheading() {
    return ( 
        <article className="brand__heading">
            <img className="featured__logo"
             src={image} alt=""/>
            <h1 className="brand__name">iPlayMusic</h1>
            <p></p>
        </article>
    )
         
    
}