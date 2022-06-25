import React, {useState} from 'react'
import styled from 'styled-components'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { carts } from './data';
import { likeOrDislikeResp } from '../responsive';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
    padding: 70px 0;
    ${likeOrDislikeResp({
        flexDirection: 'column',
        padding: '0'
    })}
`
const Left = styled.div`
    width: 30%;
    ${likeOrDislikeResp({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '60%',
        paddingBottom: '40px'
    })}
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    width: 60%;
`
const Desc = styled.div`
    width: 70%;
    padding-top: 15px;
`
const Right = styled.div`
    width: 300px;
    height: 360px;
`

const Cart = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid rgba(148, 145, 145, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    box-shadow: 4px -4px 0px 0px rgba(232,232,232, 0.5);
`

const CartTitle = styled.span`
    font-size: 12px;
    margin-top: 10px;
    display: ${props => props.index===6 && 'none'};
`
const Question = styled.span`
    font-size: 18px;
    font-weight: 500;
    margin-top: 10px;
    display: ${props => props.index === 6 && 'none'};
`
const ImageContainer = styled.div`
    position: absolute;
    top: 70px;
    display: flex;
    align-items:center;
    justify-content: center;
    transition: .5s;
    transition-delay: ${props => props.index < 6 ? '0.1s' : '0'};
    opacity: ${props => props.index === props.id ? '1' : '0'};
`
const Image = styled.img`
    width: 90%;
`
const Buttons = styled.div`
    display: ${props => props.index === 6 ? 'none' : 'flex'};
    width: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    padding-bottom: 10px;
`

const Button = styled.div`
    display: flex;
    margin: 0 10px;
    padding: 10px;
    border: 2px solid red;
    border-radius: 50%;
    color: red;
    cursor: pointer;
    transition: .4s;
    &:hover{
        background-color: rgb(168, 164, 164, 0.3);
    }
    &:active{
        background-color: red;
        color: white;
    }
`

const EndCard = styled.div`
    display: ${props => props.index === 6 ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`
const EndImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const EndTitle = styled.span`
    width: 70%;
    font-size: 18px;
`
const EndButton = styled.button`
    margin-top: 10px;
    background-color: rgb(129,230,211);
    border: none;
    outline: blue;
    padding: 10px 20px;
    font-size: 1.05rem;
    font-weight: 500;
    cursor: pointer;
`

const LikeOrDislike = () => {

    const [index, setIndex] = useState(1);

  return (
    <Container>
        <Left>
            <Title>Let's get to know each other</Title>
            <Desc>By rating outfits, you will help us understand your one-of-a-kind style.</Desc>
        </Left>

        <Right>
            <Cart>
                <CartTitle index={index}>STYLE SHUFFLE</CartTitle>
                <Question index={index}>Would you wear this?</Question>
                {carts.map(cart => (
                    <ImageContainer id={cart.id} index={index} key={cart.id}>
                        <Image alt='' src={cart.src} />
                    </ImageContainer>
                ))}
                <Buttons index={index}>
                    <Button onClick={() => setIndex(prev => prev + 1)}>
                        <ThumbDownAltOutlinedIcon />
                    </Button>
                    <Button onClick={() => setIndex(prev => prev + 1)}>
                        <ThumbUpOutlinedIcon />
                    </Button>
                </Buttons>
                <EndCard index={index}>
                    <EndImage>
                        <img alt='' style={{width: '65%'}} src={require('../images/style-shuffle-endcard.png')} />
                    </EndImage>
                    <EndTitle>Great picks so far. Ready for the next step?</EndTitle>
                    <EndButton>Take your style quiz</EndButton>
                </EndCard>
            </Cart>
        </Right>
    </Container>
  )
}

export default LikeOrDislike