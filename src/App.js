import React from 'react';
import scarecrow from './Scarecrow.png';
import './App.css';

function App() {
  return (
    <div className="AppContainer">
      <header className="NotFound">
        404 NOT FOUND
      </header>

      <div className="containerError">
        <div className="Scarecrow">
          <img src={scarecrow} className="img" alt="scarecrow" />
        </div>
        
        <div className="containerButton">
          <div className="Ihave">
            I have bad news for you
          </div>

          <div className="Thepage">
            The page you are looking for might be removed or is temporally unavailable  
          </div>

          <div className="Group103">
            <button type="button" className="Rectangle71 btn">
              <span className="BackTOHome">BACK TO HOMEPAGE</span>
            </button>
          </div>
        </div>
      
      </div>

      <footer className="footer">
        Villalva Francisco @ DevChallenges.io
      </footer>
        
    </div>
  );
}

export default App;
