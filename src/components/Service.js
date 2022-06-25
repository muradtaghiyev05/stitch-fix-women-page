import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: rgb(216,247,241);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 60px;
`
const Title = styled.h3`
    font-size: 1.8rem;
    font-weight: 500;
    padding: 35px 0;
    text-align: center;
`
const Wrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    @media only screen and (max-width: 1140px){
        flex-direction: column;
    }
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
`
const ImageContainer = styled.div`

`
const Image = styled.img`
    width: 100%;
`
const InfoTitle = styled.h3`
    font-size: 20px;
    font-weight: 500;
    margin: 8px 0;
`
const Desc = styled.span`
    width: 65%;
    text-align: center;
    font-size: 18px;
`

const Service = () => {
  return (
    <Container>
        <Title>We make it easy to build your dream closet</Title>
        <Wrapper>
            <InfoContainer>
                <ImageContainer>
                    <Image src={require('../images/expert-picks.jpg')} />
                </ImageContainer>
                <InfoTitle>Expert picks</InfoTitle>
                <Desc>Get outfit and styling suggestions that meet your price preferences.</Desc>
            </InfoContainer>
            <InfoContainer>
                <ImageContainer>
                    <Image src={require('../images/shipping.jpg')} />
                </ImageContainer>
                <InfoTitle>Free shipping</InfoTitle>
                <Desc>Easy returns and exchanges on all orders, pre-paid labels included.</Desc>
            </InfoContainer>
            <InfoContainer>
                <ImageContainer>
                    <Image src={require('../images/no-commitment.jpg')} />
                </ImageContainer>
                <InfoTitle>No commitment</InfoTitle>
                <Desc>Shop when you want, how you want. No subscription required.</Desc>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Service