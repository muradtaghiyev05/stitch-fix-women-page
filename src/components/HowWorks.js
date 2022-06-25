import React from 'react'
import styled from 'styled-components'
import { howWorksResp } from '../responsive'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(248,242,237);
`
const Top = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 40px;
`
const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
`
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 60px;
  ${howWorksResp({
    flexDirection: 'column'
  })}
`
const InfoContainer = styled.div`
  width: 25%;
  margin: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${howWorksResp({
    margin: '20px 0',
    width: '60%'
  })}
`
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Image = styled.img`
  width: 100%;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`
const InfoTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 500;
`
const Desc = styled.div`
  width: 80%;
`

const HowWorks = () => {

  return (

    <Container>
      <Top>
        <Title>How Stitch Fix works</Title>
      </Top>

      <Bottom>
        <InfoContainer>
          <ImageContainer>
            <Image src={require('../images/hiw-style-preferences.png')} />
          </ImageContainer>
          <Info>
            <InfoTitle>Tell us about your style</InfoTitle>
            <Desc>Take a quick and easy style quiz to help us learn what you love.</Desc>
          </Info>
        </InfoContainer>

        <InfoContainer>
          <ImageContainer>
            <Image src={require('../images/hiw-stylist-selections.png')} />
          </ImageContainer>
          <Info style={{marginTop: '20px'}}>
            <InfoTitle>Get pieces picked just for you</InfoTitle>
            <Desc>Collaborate with your stylist to receive pieces that reflect your style, fit and price point.</Desc>
          </Info>
        </InfoContainer>

        <InfoContainer>
          <ImageContainer>
            <Image src={require('../images/hiw-personalized-shops.png')} />
          </ImageContainer>
          <Info style={{ marginTop: '30px' }}>
            <InfoTitle>Shop on your own in your personalized store</InfoTitle>
            <Desc>Discover new items and outfit suggestions every day.</Desc>
          </Info>
        </InfoContainer>
      </Bottom>
    </Container>
  )
}

export default HowWorks