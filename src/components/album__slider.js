import "./album__slider.scss"
import "./albumnav__drawer.scss"
import {Link} from "@reach/router"
import halfimage from "../images/pexels-photo-1816943.jpg"
import albumImageone from "../images/pexels-photo-2064522.png";
import albumImagetwo from "../images/pexels-photo-1844521@2x.png"
import albumImagetree from "../images/pexels-photo-2062347@2x.png"
export default function Albumslider () {
    return (
        <>
        <div className="album__text">
        <h1 className="album_titleall">all albums</h1>
        </div>
        <div className="featureview">
            <p className="featureview__albumtext">featured albums</p>
        <p className="featureview__text">view all</p>
        </div>
        <div className="album__slider">
            <div>
            <img className="album__sliderone" src="https://picsum.photos/200/200" alt=""/></div>
            <div>
                <img className="album__slidertwo" src="https://picsum.photos/200/200" alt=""/>
            </div>
            <div className>
             <img className="album__slidertree" src="https://picsum.photos/200/200" alt=""/>
            </div>
            <div className>
                <img className="album__sliderfour" src="https://picsum.photos/200/200" alt=""/>
            </div>
            <div className>
            <img className="album__sliderfive" src="https://picsum.photos/200/200" alt=""/>
            </div>
            <div className>
            <img className="album__slidersix" src="https://picsum.photos/200/200" alt=""/>
            </div>
            <div className>
            <img className="album__sliderseven" src="https://picsum.photos/200/200" alt=""/>
            </div>
            </div>
            <div className="album__songs">
                    <p className="album__songs--newreleases">new realeses</p>
                    <p className="album__songsview">view all</p>

                    <Link className="album__songs--one" to="/playlist"><img className="album__songs--one" src={halfimage} alt=""/></Link>
                    <p className="album__songone--title">old town road</p>
                    <p className="album__songone--artist">billy ray cyrus</p>
                    <img className="album__songs--two" src={albumImageone} alt=""/>
                    <p className="album__songtwo--title">victory lab</p>
                    <p className="album__songtwo--artist">nipsey hustle</p>
                    <img className="album__songs--tree" src={albumImagetwo} alt=""/>
                    <p className="album__songtree--title">thank u, next</p>
                    <p className="album__songtree--artist">ariana grande</p>
                    <img className="album__song--four" src={albumImagetree} alt=""/>
                    <p className="album__songfour--title">death race for love
                    </p>
                    <p className="album__songfour--artist">juice wrld</p>
 </div>
 <div className="album__drawer">
    <i className="icon-fire album__drawer--fire"></i>
    <i className="icon-music"></i>
    <i className="icon-spotify-circled"></i>
    <i className="icon-adjust"></i>
    <i className="icon-albums"></i>

 </div>
        </>

    )
}