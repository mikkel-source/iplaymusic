import "./featuredcard.scss"
import {Link} from "@reach/router"
export default function FeaturedCard ({image, title, genre}) {
    return (
        <article className="featuredCard">
         <Link to="/playlist"><img className="featuredCard__image" src={image} alt=""/></Link>
        <div className="featuredCard__text">
                <h1>{title}</h1>
                <p>{genre}</p>
            </div>
        </article>      
    )
}