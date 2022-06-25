import React, {useRef} from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SliderPlayButton from './SliderPlayButton';
import { sliderResp } from '../responsive';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`
const Arrow = styled.div`
  position: absolute;
  transform: scale(1.2);
  padding: 5px 12px;
  display: flex;
  z-index: 90;
  cursor: pointer;
  background-color: ${props => props.direction === 'left' ? 'none' : 'rgba(0, 0, 0, 0.6)'};
  color: ${props => props.direction === 'left' ? 'black' : 'white'};
  left: ${props => props.direction === 'left' && '5px'};
  right: ${props => props.direction === 'right' && '5px'};
  ${sliderResp({
    display: 'none'
  })}
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-left: 50px;
  overflow-x: scroll;
  ${sliderResp({
    margin: '0'
  })}
`
const Slide = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 60vh;
  min-width: 330px;
  align-items: center;
  margin: 4px;
  ${sliderResp({
    margin: '0'
  })}
`
const VideoTitle = styled.h3`
  position: absolute;
  top: 10px;
  font-weight: 400;
`
const VideoContainer = styled.div`
  display: flex;
  height: 100%;
`
const Video = styled.video`
  width: 100%;
  object-fit: contain;
`
const InfoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ImageTitle = styled.h3`
  background-color: white;
  font-weight: 400;
  padding: 2px 30px;
  font-size: 18px;
`
const Price = styled.div`
  background-color: white;
  margin-top: 5px;
  font-weight: 300;
  font-size: 14px;
  padding: 2px 20px;
`
const ImgContainer = styled.div`
  display: flex;
  height: 100%;
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`

const Slider = () => {

    const sliderRef = useRef();
    const videoRef1 = useRef();
    const videoRef2 = useRef();
    const videoRef3 = useRef();

    function handleClick(direction) {
      if (direction==='left') {
        sliderRef.current.scrollLeft -= 250;
      }
      if (direction === 'right') {
        sliderRef.current.scrollLeft += 250;
      }
    }

    return (
      <Container>
          <Arrow direction='left' onClick={() => handleClick('left')}>
            <ArrowBackIcon />
          </Arrow>

          <Wrapper ref={sliderRef}>
            <Slide>
              <VideoTitle>Your everyday summer essentials</VideoTitle>
              <VideoContainer>
                <Video ref={videoRef1} autoPlay loop muted src={require('../images/Summer_merch.webm')} />
              </VideoContainer>
              <SliderPlayButton videoRef={videoRef1}/>
            </Slide>

            <Slide>
              <InfoContainer>
                <ImageTitle>We know-we'll find yours</ImageTitle>
                <Price>Jeans from $44 to $250</Price>
              </InfoContainer>
              <ImgContainer>
                <Image src={require('../images/Carousel_2_W_jeans.jpg')} />
              </ImgContainer>
            </Slide>

            <Slide>
              <VideoTitle>Athleisure days, your way</VideoTitle>
              <VideoContainer>
                <Video ref={videoRef2} autoPlay muted loop src={require('../images/Women_resort.webm')} />
              </VideoContainer>
              <SliderPlayButton videoRef={videoRef2} />
            </Slide>

            <Slide>
              <InfoContainer>
                <ImageTitle style={{padding: '2px 10px'}}>Dress up for your kind of vacation</ImageTitle>
                <Price>Accessories from $28 to $175</Price>
              </InfoContainer>
              <ImgContainer>
                <Image src={require('../images/Layered_image.jpg')} />
              </ImgContainer>
            </Slide>

            <Slide>
              <VideoTitle>Work-ready looks, defined by you</VideoTitle>
              <VideoContainer>
                <Video ref={videoRef3} autoPlay muted loop src={require('../images/Women_workwear.webm')} />
              </VideoContainer>
              <SliderPlayButton videoRef={videoRef3} />
            </Slide>

          </Wrapper>

          <Arrow direction='right' onClick={() => handleClick('right')}>
            <ArrowForwardIcon />
          </Arrow>
      </Container>
    )
}

export default Slider