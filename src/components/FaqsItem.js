import React, {useState} from 'react'
import styled from 'styled-components'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const LinkItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
`
const LinkTitle = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    &:active{
        border: 1px solid aqua;
    }
`
const Question = styled.h3`
  margin-left: 5px;
  font-weight: 500;
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
const Desc = styled.div`
  margin-left: 28px;
  width: 90%;
  display: ${props => props.click ? 'none' : 'flex'};
  flex-direction: column;
`
const DescLink = styled.span`
    margin-top: 5px;
    color: rgb(49,108,175);
    cursor: pointer;
    position: relative;
    max-width: 140px;
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

const FaqsItem = ({item}) => {

    const [click, setClick] = useState(true);

  return (
      <LinkItem>
          <LinkTitle onClick={() => setClick(prev => !prev)}>
              {click ? <AddOutlinedIcon /> : <RemoveOutlinedIcon />}
              <Question>{item.title}</Question>
          </LinkTitle>
          <Desc click={click}>{item.desc} <br />{item.link && <DescLink><a href='#' style={{ textDecoration: 'none' }}>{item.link}</a></DescLink>}</Desc>
      </LinkItem>
  )
}

export default FaqsItem