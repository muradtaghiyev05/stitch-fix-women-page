import React, {useState} from 'react'
import styled from 'styled-components'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AlbumRoundedIcon from '@mui/icons-material/AlbumRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navbarResp } from '../responsive'

const Container = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 60px;
    width: 100%;
    background-color: white;
    z-index: 100;
`

const Left = styled.div`
    margin-left: 90px;
    display: flex;
    align-items: center;
    padding: 15px 0;
`
const Right = styled.div`
    margin-right: 60px;
`

const Logo = styled.h1`
    font-size: 1.4rem;
    font-weight: 500;
    cursor: pointer;
    ${navbarResp({
        display: 'none'
    })}
`
const NavIcon = styled.div`
    position: absolute;
    padding: 10px 8px;
    left: 10px;
    display: none;
    align-items: center;
    transform: scale(1.3);
    cursor: pointer;
    ${navbarResp({
        display: 'flex'
    })}
`

const Categories = styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px;
    height: 60px;
    ${navbarResp({
        marginLeft: '0px'
    })}
`
const Category = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
    height: 100%;
    position: relative;
    &:hover{
        font-weight: 500;
    }
    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        left: 0;
        bottom: 0;
        background-color: rgb(168, 164, 164);
        transform: scale(0, 1);
        transition: transform 0.3s ease;
    }
    &:hover::after{
        transform: scale(1, 1);
    }
    &:first-child{
        font-weight: 500;
    }
    &:first-child::after{
        background-color: rgb(34,191,176);
        transform: scale(1, 1);
    }
`
const Links = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    height: 60px;
    transition: all .4s ease;
    ${navbarResp({
        position: 'absolute',
        flexDirection: 'column',
        backgroundColor: 'white',
        left: '0',
        top: '3.7rem',
        height: '230px',
        width: '100%',
        alignItems: 'flex-start',
        paddingBottom: '20px',
        fontSize: '14px',
        zIndex: -1,
        transform: props => props.click ? 'translateY(-150%)' : 'translateY(0)'
    })}
`
const HomeLink = styled.li`
    padding: 0 14px;
    cursor: pointer;
    display: none;
    align-items: center;
    height: 100%;
    ${navbarResp({
        display: 'flex'
    })}
`

const LinkItemWithHover = styled.li`
    padding: 0 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        left: 0;
        bottom: 0;
        background-color: rgb(168, 164, 164);
        transform: scale(0, 1);
        transition: transform 0.3s ease;
    }
    &:hover::after{
        transform: scale(1, 1);
    }
`
const SignInContainer = styled.li`
    padding: 0 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 600;
    border: 1px solid black;
    padding: 5px 14px;
    margin: 0 10px;
    transition: .2s;
    &:hover{
        background-color: rgb(168, 164, 164, 0.3);
    }
    ${navbarResp({
        color: 'white',
        backgroundColor: 'rgb(221,46,62)',
        border: 'none',
        padding: '10px 30px'
    })}
`
const BagContainer = styled.li`
    padding: 0 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    ${navbarResp({
        display: 'none'
    })}
`
const BagIcon = styled.div`
    transform: scale(1.2);
`
const BagTitle = styled.span`
    padding-left: 6px;
`
const BagIconResp = styled.div`
    transform: scale(1.2);
    position: absolute;
    right: 20px;
    top: 20px;
    display: none;
    ${navbarResp({
        display: 'inline'
    })}
`

const Navbar = () => {

    const [click, setClick] = useState(true);

  return (
    <Container>
        <Left>
            <Logo>STITCH FIX</Logo>
            <NavIcon onClick={() => setClick(prev => !prev)}>
                {click ? <MenuIcon /> : <CloseIcon />}
                <AlbumRoundedIcon />
            </NavIcon>
            <Categories>
                <Category>Women</Category>
                <Category>Men</Category>
                <Category>Kids</Category>
            </Categories>
        </Left>
        <Right>
            <Links click={click}>
                <HomeLink>Home</HomeLink>
                <LinkItemWithHover>Social Impact</LinkItemWithHover>
                <LinkItemWithHover>FAQ</LinkItemWithHover>
                <LinkItemWithHover>Gift Cards</LinkItemWithHover>
                <BagContainer>
                    <BagIcon>
                        <ShoppingBagOutlinedIcon />
                    </BagIcon>
                    <BagTitle>Bag</BagTitle>
                </BagContainer>
                <SignInContainer>Sign In</SignInContainer>
            </Links>
            <BagIconResp>
                <ShoppingBagOutlinedIcon />
            </BagIconResp>
        </Right>
    </Container>
  )
}

export default Navbar