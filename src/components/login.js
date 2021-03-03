import querystring from "querystring" 
export default function Login() {
    var queryParameters = querystring.stringify({
        response_type: "code",
        client_id: "56c706079dea4417a444cd1091bd004a",
        scope: "user-read-private user-read-email",
        redirect_uri: "http://localhost:8888/callback",
        state: "srrwtwr"


    })
    return (
        <article>
            <h1>Login</h1>
            <a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>login with <i className="icon-spotify-circled"></i></a>
        </article>
    ) 
    
}