import React from 'react'
import styled from 'styled-components'
import { faqs } from './data';
import FaqsItem from './FaqsItem';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  padding: 0 40px;
`
const Title = styled.h2`
  padding-bottom: 5px;
  font-weight: 500;
`
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  @media only screen and (max-width: 900px){
      width: 90%;
  }
`

const Faqs = () => {

  return (
    <Container>
        <Title>FAQs</Title>
        <Links>
          {faqs.map(item => (
            <FaqsItem key={item.id} item={item} />
          ))}
        </Links>
    </Container>
  )
}

export default Faqs