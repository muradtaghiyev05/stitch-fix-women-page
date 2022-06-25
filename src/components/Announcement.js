import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

const Announcement = () => {

    const [clicked, setClicked] = useState(false);

    const Container = styled.div`
        background-color: rgb(0,106,101);
        color: white;
        font-weight: 300;
        display: ${clicked ? 'none' : 'flex'};
        position: fixed;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 15px 0;
        z-index: 90;
        margin-top: 60px;
        min-height: 52px;
    `
    const Title = styled.div`
        cursor: pointer;
        position: relative;
        transform: scale(1, 1);
        &::after{
            content: '';
            position: absolute;
            height: 1px;
            width: 100%;
            background-color: white;
            left: 0;
            bottom: 0;
            transition: transform .3s ease;
            transform-origin: 0% 100%;
        }
        &:hover::after{
            transform: scale(0, 1);
        }
    `
    const CloseContainer = styled.div`
        position: absolute;
        top: 12px;
        right: 20px;
        transform: scale(1.4);
        cursor: pointer;
        display: flex;
        padding: 2px;
        transition: .3s;
        border: 0.5px solid transparent;
        border-radius: 50%;
        
        &:hover{
            border-color: white;
        }
    `

    return (
        <Container>
            <Title>UNLOCK YOUR $20 CREDIT</Title>
            <CloseContainer onClick={() => setClicked(prev => !prev)}>
                <CloseIcon />
            </CloseContainer>
        </Container>
  )
}

export default Announcement