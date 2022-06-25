import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
    border: 22px solid rgb(129,230,211);
    padding: 50px 0;
    text-align: center;
`
const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
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

const GetStarted = () => {
  return (
    <Container>
        <Title>Ready to get started with Stitch Fix?</Title>
        <Button>Take your style quiz</Button>
    </Container>
  )
}

export default GetStarted