import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 40px;
    color: #515762;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
`
const Title = styled.span`
    margin-right: 30px;
    text-align: center;
    @media only screen and (max-width: 900px) {
        padding-top: 20px;
        order: 2;
    }
`
const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media only screen and (max-width: 900px) {
        order: 1;
        align-items: center;
        justify-content: center;
    }
`
const LinkItem = styled.span`
    margin: 0 5px;
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

const FooterEnd = () => {

  return (
    <Container>
        <Title>Stitch Fix and Fix are trademarks of Stitch Fix, Inc.</Title>
        <Links>
            <LinkItem>Terms of Use</LinkItem >-
            <LinkItem>Privacy Policy</LinkItem>-
            <LinkItem>Supply Chain Information</LinkItem>-
            <LinkItem>Ad Choices</LinkItem>-
            <LinkItem>CA Notice at Collection</LinkItem>-
            <LinkItem>Do Not Sell My Personal Information</LinkItem>-
            <LinkItem>Sitemap</LinkItem>
        </Links>
    </Container>
  )
}

export default FooterEnd