import "./album__navbar.scss"

export default function AlbumNavbar ({title}) {
    return (
        <div className="latesttrend__navbar">

            <i className="fas fa-chevron-left"></i>

            <p className="album__title">{title}</p>
            <i className="fas fa-search"></i>
        </div>
    )


}