import React, {useState} from 'react'
import styled from 'styled-components'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';

const Button = styled.button`
    position: absolute;
    color: white;
    right: 20px;
    bottom: 15px;
    display: flex;
    border-radius: 50%;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    @media only screen and (max-width: 550px){
        right: 45px;
    }
`

const SliderPlayButton = ({videoRef}) => {

    const [play, setPlay] = useState(true);

    function handleClick() {

        setPlay(prev => !prev);
        if (videoRef.current.paused) {
            videoRef.current.play();
        }
        else {
            videoRef.current.pause();
        }
    }

    return (
        <Button onClick={handleClick}>
            {play ? <PauseOutlinedIcon style={{ transform: 'scale(0.6)' }} /> : <PlayArrowOutlinedIcon style={{ transform: 'scale(0.8)' }} />}
        </Button>
    )
}

export default SliderPlayButton