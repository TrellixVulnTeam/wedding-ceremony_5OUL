import lizning from './lizning.jpg';
import lizning2 from './lizning2.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';
import pic7 from './pic7.jpg';
import pic8 from './pic8.jpg';
import pic9 from './pic9.jpg';
import pic10 from './pic10.jpg';
import Marquee from "./Marquee";
import './App.css';
import './Components/Grid.js';
import CenteredGrid from './Components/Grid.js';
import SpotifyPlayer from 'react-spotify-player';
// import { Typography } from '@material-ui/core';

const size = {
  width: '30%',
  height: 90,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lizning} className="App-logo" alt="logo" />
        <h2>
          LIZ & NING'S WEDDING <br />
          <strong>10 APRIL 2021 <br />
          9:45 AM</strong>
        </h2>
        <Marquee string="Welcome VIP. Congratulations! You have arrived at this awesome page. Please RSVP if you haven't, you beautiful thing you."/>
        {/* <marquee bgcolor="#FF0000" scrolldelay="50" scrollamount="10" truespeed>
          <Typography variant="h2" color='textPrimary'>
            Welcome! You have arrived at our wedding details page. Pls what-apps them if you haven't RSVPed you rascal.
          </Typography>
        </marquee> */}
        <br />
        <CenteredGrid />
      <SpotifyPlayer
        uri="spotify:playlist:6LeXBnFIU7ow3RD5EVAJPL"
        size={size}
        view={view}
        theme={theme}
        /><span className="lyrics">I don't believe in an interventionist God
        But I know, darling, that you do
        But if I did I would kneel down and ask Him
        Not to intervene when it came to you
        Not to touch a hair on your head
        To leave you as you are
        And if He felt He had to direct you
        Then direct you into my arms
        Into my arms, O Lord
        Into my arms, O Lord
        Into my arms, O Lord
        Into my arms</span>
        </header>
      <img src={pic4} className="App-pic2" alt="logo" />
      <img src={lizning2} className="App-pic3" alt="logo" />
      <p>
        we love u
      </p>
      <img src={pic2} className="App-pic3" alt="logo" />
      <img src={pic3} className="App-pic4" alt="logo" />
      <img src={pic5} className="App-pic5" alt="logo" />
      <img src={pic6} className="App-pic5" alt="logo" />
      <img src={pic7} className="App-pic2" alt="logo" />
      <img src={pic8} className="App-pic4" alt="logo" />
      <img src={pic9} className="App-pic3" alt="logo" />
      <img src={pic10} className="App-pic2" alt="logo" />
      <p>
        b/w photos by Jiehao
      </p>
    </div>
  );
}

export default App;
