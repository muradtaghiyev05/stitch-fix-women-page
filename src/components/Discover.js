import React, {useRef} from 'react'
import styled from 'styled-components'
import PlayPauseButton from './PlayPauseButton';
import { discoverResp } from '../responsive';

const Discover = () => {

    const videoRef = useRef();

    const Container = styled.div`
        display: flex;
        padding-top: 60px;
        ${discoverResp({
            flexDirection: 'column'
        })}
    `
    const Left = styled.div`
        flex: 1;
        background: linear-gradient(to bottom left, rgb(0,78,87), rgb(0,42,46));
        display: flex;
        align-items: center;
    `

    const Info = styled.div`
        margin-left: 150px;
        ${discoverResp({
            margin: '0',
            padding: '30px 0 20px 20px'
        })}
    `
    const Title = styled.h2`
        color: white;
        font-size: 2.25rem;
    `
    const Button = styled.button`
        background-color: rgb(129,230,211);
        border: none;
        outline: blue;
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 1.05rem;
        font-weight: 500;
        cursor: pointer;
    `

    const Right = styled.div`
        flex: 1;
        display: flex;
        position: relative;
    `
    const Video = styled.video`
        width: 100%;
        object-fit: cover;
    `

    return (
        <Container>
            <Left>
                <Info>
                    <Title>Discovering styles you<br /> love just got easier</Title>
                    <Button>Take your style quiz</Button>
                </Info>
            </Left>
            <Right>
                <Video autoPlay muted loop ref={videoRef} src={require('../images/women-stitch-fix-video.mp4')} />
                <PlayPauseButton videoRef={videoRef} />
            </Right>
        </Container>
  )
}

export default Discover