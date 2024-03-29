import { useRef } from 'react'
import PropTypes from 'prop-types';
import './Videoplayer.css'
import video from './assets/clg.mp4'

function Videoplayer({playState, setPlayState}) {

    const player = useRef(null);

    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }
  return (
    <div className={`video-player ${playState? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}
Videoplayer.propTypes = {
  playState: PropTypes.bool.isRequired,
  setPlayState: PropTypes.func.isRequired
};


export default Videoplayer
