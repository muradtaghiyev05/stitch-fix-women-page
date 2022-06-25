import React from 'react'
import styled from 'styled-components'
import { logos } from './data'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    padding-top: 50px;
    text-align: center;
`
const Desc = styled.div`
    padding: 10px 0 20px 0;
    text-align: center;
`
const Link = styled.span`
    color: rgb(88, 167, 224);
    cursor: pointer;
    position: relative;
    transform: scale(1, 1);
    &::after{
            content: '';
            position: absolute;
            height: 1px;
            width: 100%;
            background-color: rgb(88, 167, 224);
            left: 0;
            bottom: 0;
            transition: transform .3s ease;
            transform-origin: 0% 100%;
        }
        &:hover::after{
            transform: scale(0, 1);
        }
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1000px){
        align-items: flex-start;
        justify-content: flex-start;
        overflow-x: scroll;
    }
`

const Logos = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding-bottom: 40px;
`
const ImageContainer = styled.div`
    width: 120px;
`
const Image = styled.img`
    width: 100%;
`

const Brands = () => {
  return (
    <Container>
        <Title>Let us find your faves from 1000+ brands & styles</Title>
        <Desc>We carry women’s sizes XS–3X including <Link>Plus</Link>, <Link>Petite</Link> and <Link>Maternity</Link>.</Desc>
        <Wrapper>
            <Logos>
                {logos.map(logo => (
                        <ImageContainer key={logo.id}>
                            <Image src={logo.src} />
                        </ImageContainer>
                    )
                )}
            </Logos>
        </Wrapper>
    </Container>
  )
}

export default Brands