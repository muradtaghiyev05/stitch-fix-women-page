import React from 'react'
import styled from 'styled-components'
import { peopleResp } from '../responsive'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
    ${peopleResp({
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    })}
`
const ImageContainer = styled.div`
    ${peopleResp({
        width: '100%'
    })}
`
const Image = styled.img`
    width: 100%;
`
const Info = styled.div`
    width: 25%;
    margin-left: 40px;
    ${peopleResp({
        width: '100%',
        marginLeft: '20px'
    })}
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: 500;
`
const Desc = styled.div`
    margin-top: 15px;
    line-height: 1.4;
    ${peopleResp({
        width: '45%'
    })}
`
const Bottom = styled.div`
    width: 100%;
    ${peopleResp({
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        overflowX: 'scroll'
    })}
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${peopleResp({
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    })}
`
const CommentContainer = styled.div`
    margin: 0 10px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    min-width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid rgb(34,191,176);
    
`
const Comment = styled.blockquote`
    
`
const Quote = styled.p`
    margin-bottom: 10px;
    &::before{
        font-family: 'FontAwesome';
        content: '\f10d';
        font-size: 50px;
        color: rgb(34,191,176);
        padding: 10px;
    }
`

const People = () => {
  return (
    <Container>
        <Top>
            <ImageContainer>
                <Image src={require('../images/stylist-desktop.jpg')} />
            </ImageContainer>
            <Info>
                <Title>Real people who <br /> really get your style</Title>
                <Desc>Your stylist can help complete a look, collaborate on trends, recommend pieces that fit your unique body and incorporate your input into each item they send.</Desc>
            </Info>
        </Top>

        <Bottom>
            <Wrapper>
                <CommentContainer>
                    <Comment>
                        <Quote>
                            By collaborating to blend her unique taste,fit and body type, I helped Sara find the perfect jeans to flatter her petite frame!
                            <br />
                        </Quote>
                        <span><span style={{fontWeight: '600'}}>-Christina,</span> stylist</span>
                    </Comment>
                </CommentContainer>
                <CommentContainer>
                    <Comment>
                        <Quote>
                            By collaborating to blend her unique taste,fit and body type, I helped Sara find the perfect jeans to flatter her petite frame!
                        </Quote>
                        <span><span style={{ fontWeight: '600' }}>-Lizzy,</span> stylist</span>
                    </Comment>
                </CommentContainer>
                <CommentContainer>
                    <Comment>
                        <Quote>
                            By collaborating to blend her unique taste,fit and body type, I helped Sara find the perfect jeans to flatter her petite frame!
                        </Quote>
                        <span><span style={{ fontWeight: '600' }}>-Nicole,</span> stylist</span>
                    </Comment>
                </CommentContainer>
            </Wrapper>
        </Bottom>
    </Container>
  )
}

export default People