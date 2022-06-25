import React, { useState } from 'react'
import styled from 'styled-components'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { footerResp } from '../responsive'

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    padding-top: 40px;
    margin: 40px 0 20px 0;
    position: relative;
    &::before, &::after{
      content: '';
      height: 1px;
      width: 85%;
      background-color: black;
      opacity: 0.2;
      position: absolute;
      top: -10px;
      ${footerResp({
        height: '0'
      })}
    }
    &::after{
      bottom: -5px;
    }
    ${footerResp({
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: props => props.click ? '110px' : '0px'
    })}
    
`
const Left = styled.div`
  
  ${footerResp({
    display: props => props.click ? 'flex': 'none',
    alignItems: 'center',
    justifyContent: 'center'
  })}
`
const Title = styled.h1`
    font-size: 2rem;
    font-weight: 400;
    cursor: pointer;
    margin-bottom: 10px;
    ${footerResp({
      display: 'none'
    })}
`
const LangContainer = styled.div`
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  ${footerResp({
    display: 'none'
  })}

  &:first-child{
    display: none;
    position: absolute;
    left: 10px;
    top: 0;
    font-size: 14px;
    ${footerResp({
      display: 'flex'
    })}
  }
`
const Languages = styled.select`
  border: none;
  outline: none;
  cursor: pointer;
  padding-left: 5px;
`
const Language = styled.option`
  font-size: 1.01rem;
`
const Flag = styled.img`
  width: 20px;
`

const AppStore = styled.div`
    width: 130px;
    cursor: pointer;
    ${footerResp({
      position: 'absolute',
      bottom: '10px',
      width: '200px'
    })}
`
const Image = styled.img`
    width: 100%;
`

const Center = styled.div`
    display: flex;
   ${footerResp({
      display: props => props.click ? 'flex' : 'none',
      textAlign: 'center',
      justifyContent: 'space-around',
      width: '100%'
   })}
`
const LinkContainer = styled.div`
    margin: 0 40px;
    &:last-child{
      @media only screen and (max-width: 560px) {
        display: none;
      }
    }
`

const LinkTitle = styled.span`
    font-weight: 500;
`
const Links = styled.ul`
    
`
const LinkItem = styled.li`
    list-style: none;
    margin: 10px 0;
    cursor: pointer;
    position: relative;
    &::after{
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background-color: rgb(49,108,175, 0.7);
        left: 0;
        bottom: 0;
        transform: scale(0, 1);
        transition: transform .3s;
        transform-origin: 0% 100%;
    }
    &:hover::after{
        transform: scale(1, 1);
    }
`

const Right = styled.div`
    ${footerResp({
      display: props => props.click ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    })}
`
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    &::after, &::before{
      content: '';
      height: 0px;
      width: 100%;
      background-color: black;
      opacity: 0.2;
      position: absolute;
      bottom: -10px;
      ${footerResp({
        height: '1px'
      })}
    }
    &::before{
      top: -15px;
    }
    ${footerResp({
      marginTop: '20px'
    })}
`

const Icon = styled.div`
  cursor: pointer;
  width: 30px;
  margin: 0 15px;
  &:first-child{
    width: 20px;
  }
`
const MoreInfo = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  &::before, &::after{
    content: '';
    height: 1px;
    background-color: black;
    opacity: 0.2;
    width: 100%;
  }
  ${footerResp({
    display: 'flex'
  })}
`

const Question = styled.div`
  display: none;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 14px;
  ${footerResp({
    display: 'flex'
  })}
`
const Visit = styled.li`
  list-style: none;
  position: relative;
  cursor: pointer;
  &::after{
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      background-color: rgb(49,108,175, 0.7);
      left: 0;
      bottom: 0;
  }
`

const Footer = () => {

  const [flag, setFlag] = useState('USA');
  const [click, setClick] = useState(false);

  return (
    <Container click={click}>
      <LangContainer>
        {flag === 'USA' ? (
          <Flag src={require('../images/united-states-of-america.png')} />
        ) : (
          <Flag src={require('../images/united-kingdom.png')} />
        )}
        <Languages onChange={e => setFlag(e.target.value)}>
          <Language value='USA'>United States</Language>
          <Language value='UK'>United Kingdom</Language>
        </Languages>
      </LangContainer>
      <Question>
        <span>Questions?&nbsp;</span>
        <Visit>Visit our FAQ</Visit>
      </Question>
      <MoreInfo onClick={() => setClick(prev => !prev)}>
        <span style={{paddingLeft: '5px', minWidth: '75px', textAlign: 'center'}}>More Info</span>
        {click ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
      </MoreInfo>
      <Left click={click}>
        <Title>STITCH FIX</Title>
        <LangContainer>
          {flag==='USA' ? (
            <Flag src={require('../images/united-states-of-america.png')} />
          ) : (
            <Flag src={require('../images/united-kingdom.png')} />
          )}
          <Languages onChange={e => setFlag(e.target.value)}>
            <Language value='USA'>United States</Language>
            <Language value='UK'>United Kingdom</Language>
          </Languages>
        </LangContainer>
        <AppStore>
          <Image src={require('../images/download-on-app-store.png')} />
        </AppStore>
      </Left>

      <Center click={click}>
        <LinkContainer>
          <LinkTitle>The Service</LinkTitle>
          <Links>
            <LinkItem>Gift Cards</LinkItem>
            <LinkItem>iPhone App</LinkItem>
            <LinkItem>Plus Sizes</LinkItem>
            <LinkItem>Maternity</LinkItem>
            <LinkItem>Petite</LinkItem>
            <LinkItem>Big & Tall</LinkItem>
            <LinkItem>Women's Jeans</LinkItem>
            <LinkItem>Business Casual</LinkItem>
          </Links>
        </LinkContainer>
        <LinkContainer>
          <LinkTitle>The Company</LinkTitle>
          <Links>
            <LinkItem>About Us</LinkItem>
            <LinkItem>Social Impact</LinkItem>
            <LinkItem>Women's Blog</LinkItem>
            <LinkItem>Men's Blog</LinkItem>
            <LinkItem>Press</LinkItem>
            <LinkItem>Investor Relations</LinkItem>
            <LinkItem>Careers</LinkItem>
            <LinkItem>Tech Blog</LinkItem>
          </Links>
        </LinkContainer>
        <LinkContainer>
          <LinkTitle>Questions?</LinkTitle>
          <Links>
            <LinkItem>FAQ</LinkItem>
            <LinkItem>Help</LinkItem>
            <LinkItem>Returns</LinkItem>
          </Links>
        </LinkContainer>
      </Center>

      <Right click={click}>
        <IconContainer>
          <Icon>
            <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </Icon>
          <Icon>
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </Icon>
          <Icon>
            <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
            </svg>
          </Icon>
          <Icon>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </Icon>
          <Icon>  
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
            </svg>
          </Icon>
          <Icon>
            <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
            </svg>
          </Icon>
        </IconContainer>
      </Right>
    </Container>
  )
}

export default Footer