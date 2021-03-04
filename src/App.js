import './App.scss';
import { Router } from "@reach/router";
import LoginPage from "./pages/login"
import Frontpage from './pages/frontpage';
import Callback from './pages/callback';
import TokenContext from "./pages/tokenContext"
import { useState } from 'react';
import Albums from "./pages/albums"
import Playlist from './components/playlist';
import Featuredpage from './pages/featured';
import ErrorBoundary from './components/ErrorBoundry';
export default function App() {
  var tokenState = useState(null)
  return (

    <ErrorBoundary>


        <div className="iplay__wrapper">
        <TokenContext.Provider value={tokenState}>
    <Router>
      <LoginPage default path="/" />
      <Callback path="/callback" />
      <Frontpage path="/iplaymusic" /> 
      < Albums path="/albums" />
      <Playlist path="/playlist" />
      <Featuredpage path="/featured" />
      
    </Router>
    </TokenContext.Provider>
  

    </div>
    </ErrorBoundary>
  );
}

