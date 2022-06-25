import React, {useState} from 'react'
import styled from 'styled-components'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';

const Button = styled.button`
    position: absolute;
    color: white;
    right: 20px;
    bottom: 20px;
    padding: 15px;
    border-radius: 50%;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
`

const PlayPauseButton = ({videoRef}) => {

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
            {play ? <PauseOutlinedIcon style={{ transform: 'scale(1.6)' }} /> : <PlayArrowOutlinedIcon style={{ transform: 'scale(2)' }} />}
        </Button>
    )
}

export default PlayPauseButton